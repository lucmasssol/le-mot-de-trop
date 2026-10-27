import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";

const html = readFileSync(new URL("../public/index.html", import.meta.url), "utf8");
const bank = readFileSync(new URL("../public/word-pairs.js", import.meta.url), "utf8");
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
const normalize = (word) => word.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase().replace(/œ/g, "oe").replace(/æ/g, "ae").replace(/[^a-z0-9]/g, "");

test("1,000 distinct, well-formed pairs", () => {
  const pairs = vm.runInNewContext(`${bank}\nWORD_PAIRS`);
  assert.equal(pairs.length, 1000);
  const keys = pairs.map((pair) => {
    assert.equal(pair.length, 2);
    for (const word of pair) assert.ok(word && word === word.trim());
    assert.notEqual(normalize(pair[0]), normalize(pair[1]));
    return Array.from(pair, normalize).sort().join("|");
  });
  assert.equal(new Set(keys).size, 1000);
});

// A small DOM adapter runs the actual inline game script without external dependencies.
function game(count = 4) {
  const elements = new Map();
  class Element {
    constructor() {
      this.hidden = false;
      this.value = "";
      this.textContent = "";
      this.children = [];
      this.style = {};
      this.handlers = {};
      this.classList = { add() {}, remove() {} };
    }
    addEventListener(name, handler) { this.handlers[name] = handler; }
    setAttribute() {}
    focus() {}
    reset() { get("#player-name").value = ""; get("#white-guess").value = ""; }
    reportValidity() {}
    replaceChildren(...children) { this.children = children; }
    append(...children) {
      this.children.push(...children);
      for (const child of children) if (child.id) elements.set(`#${child.id}`, child);
    }
    add(child) { this.children.push(child); }
    remove() { elements.delete(`#${this.id}`); }
  }
  function get(selector) {
    if (!elements.has(selector)) elements.set(selector, new Element());
    return elements.get(selector);
  }
  const optional = new Set(["#word", "#role-name", "#secret-note"]);
  const document = {
    querySelector(selector) {
      return optional.has(selector) ? elements.get(selector) : get(selector);
    },
    createElement() { return new Element(); }
  };
  const context = vm.createContext({
    document,
    Option: class extends Element {
      constructor(text, value) { super(); this.textContent = text; this.value = value; }
    },
    Math: Object.assign(Object.create(Math), { random: () => 0 })
  });
  vm.runInContext(bank, context);
  vm.runInContext(script, context);
  function click(selector) { get(selector).handlers.click(); }
  function submit(selector) { get(selector).handlers.submit({ preventDefault() {} }); }
  for (let i = 4; i < count; i++) click("#increase");
  if (count === 3) click("#decrease");
  click("#start");
  function deal(prefill = false) {
    for (let i = 0; i < count; i++) {
      assert.equal(get("#player-name").value, prefill ? `P${i}` : "");
      get("#player-name").value = `P${i}`;
      submit("#name-form");
      assert.equal(get("#name-form").hidden, true);
      assert.ok(["Ton mot", "Caméléon"].includes(get("#role-name").textContent));
      if (get("#role-name").textContent === "Caméléon") {
        assert.equal(elements.has("#word"), false);
      }
      click("#next-player");
      assert.equal(elements.has("#word"), false);
    }
  }
  function vote(index) {
    get("#vote-player").value = String(index);
    submit("#vote-form");
  }
  return { get, click, submit, deal, vote };
}

test("role counts for every group size and hidden camps", () => {
  const counts = { 3: 1, 4: 1, 5: 1, 6: 2, 7: 2, 8: 2, 9: 3, 10: 3, 11: 4, 12: 4 };
  for (let n = 3; n <= 12; n++) {
    const app = game(n);
    app.deal();
    const summary = app.get("#role-summary").innerHTML;
    assert.ok(summary.includes(`<span>Intrus</span><strong>${counts[n]}</strong>`));
    for (const index of [...Array(counts[n] - 1).keys(), n - 1]) {
      app.vote(index);
      assert.ok(app.get("#elimination-detail").textContent.includes("Intrus"));
      app.click("#continue-round");
    }
    assert.equal(app.get("#winner-title").textContent, "Les Initiés ont gagné !");
  }
});

test("one remaining Initié gives victory to Intrus", () => {
  const app = game();
  app.deal();
  app.vote(1);
  assert.equal(app.get("#continue-round").textContent, "Voir le résultat");
  app.click("#continue-round");
  assert.equal(app.get("#winner-title").textContent, "Les Intrus ont gagné !");
});

test("circle order stays fixed while the starting position rotates", () => {
  const app = game(8);
  app.deal();
  const eliminated = new Set();
  let starter = 0;
  for (const index of [3, 0, 5]) {
    app.vote(index);
    eliminated.add(index);
    app.click("#continue-round");
    do { starter = (starter + 1) % 8; } while (eliminated.has(starter));
    const expected = Array.from({ length: 8 }, (_, offset) => (starter + offset) % 8)
      .filter((seat) => !eliminated.has(seat)).map((seat) => `P${seat}`);
    assert.deepEqual(app.get("#turn-order").children.map((child) => child.textContent), expected);
  }
});

test("Caméléon cannot start, normalized guess wins, replay retains names", () => {
  const app = game();
  app.deal();
  assert.equal(app.get("#turn-order").children[0].textContent, "P1");
  app.vote(0);
  assert.equal(app.get("#continue-round").hidden, true);
  app.get("#white-guess").value = " PÔMME ! ";
  app.submit("#guess-form");
  assert.equal(app.get("#winner-title").textContent, "Le Caméléon a gagné !");
  app.click("#new-game");
  app.deal(true);
  app.vote(0);
  app.get("#white-guess").value = "pommes";
  app.submit("#guess-form");
  assert.equal(app.get("#winner-title").textContent, "Le Caméléon a gagné !");
  app.click("#change-players");
  app.click("#start");
  assert.equal(app.get("#player-name").value, "");
});

test("incorrect guess consumes the only attempt", () => {
  const app = game();
  app.deal();
  app.vote(0);
  app.get("#white-guess").value = "banane";
  app.submit("#guess-form");
  assert.equal(app.get("#guess-form").hidden, true);
  app.get("#white-guess").value = "pomme";
  app.submit("#guess-form");
  assert.equal(app.get("#finished").hidden, true);
  app.click("#continue-round");
  assert.equal(app.get("#ready").hidden, false);
  assert.equal(app.get("#vote-player").children.some((option) => option.value === "0"), false);
});
