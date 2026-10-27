# Le Mot de Trop

Jeu de mots et de bluff en français, sur un téléphone partagé, pour 3 à 12 personnes.

## Jouer

Le site est publié avec GitHub Pages :
https://lucmasssol.github.io/le-mot-de-trop/

1. Choisissez le nombre de joueurs.
2. Passez le téléphone dans l'ordre du cercle : chacun entre son prénom et découvre sa carte.
3. Donnez un indice chacun, débattez, puis sélectionnez la personne éliminée.

Les **Initiés** reçoivent le mot commun ; les **Intrus**, un mot différent. Ces joueurs ne connaissent pas leur camp. Le **Caméléon** ne reçoit aucun mot et connaît son rôle.

L'ordre d'inscription est conservé. Le premier tour commence au premier joueur qui n'est pas le Caméléon. Aux tours suivants, le départ avance dans le cercle, en sautant les éliminés.

Les Initiés gagnent quand tous les Intrus sont éliminés. Les Intrus gagnent s'ils sont encore en jeu et qu'il reste au plus un Initié. Le Caméléon gagne s'il devine le mot des Initiés après son élimination : une seule tentative, sans distinction de casse, d'accents ou de ponctuation, avec une faute d'une lettre tolérée à partir de quatre lettres.

« Rejouer » préremplit les prénoms, modifiables, dans le même ordre. Actualiser la page ou choisir « Changer les joueurs » les efface.

## Développement

- `public/index.html` : interface et logique de jeu.
- `public/word-pairs.js` : 1 000 paires françaises.
- `test/game.test.mjs` : contrôles des données et scénarios du jeu.

Aucune dépendance à installer. Ouvrez `public/index.html` dans un navigateur.
Avec Node.js 22 ou plus récent :

```sh
npm test
```

## Publication

Chaque push sur `main` déclenche les contrôles, puis publie uniquement `public/` sur GitHub Pages. Les pull requests exécutent les contrôles sans publier. Le workflow peut aussi être lancé manuellement depuis l'onglet Actions.

Dans Settings > Pages, la source doit être **GitHub Actions**.

## Données et limites

Les prénoms et la partie restent en mémoire dans le navigateur : ni compte, ni base de données, ni outil de mesure d'audience. GitHub peut traiter les données techniques des visiteurs conformément à sa politique de confidentialité.

Les mots sont livrés au navigateur : il ne s'agit pas d'un système anti-triche. Les paires peuvent revenir d'une partie à l'autre. Le fonctionnement hors connexion après fermeture n'est pas garanti.

Le nom du jeu et les noms de rôles n'ont pas fait l'objet d'une vérification juridique de disponibilité.
