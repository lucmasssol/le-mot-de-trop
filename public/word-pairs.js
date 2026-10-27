const WORD_PAIRS = `
Pomme|Poire; Banane|Plantain; Orange|Mandarine; Citron|Citron vert; Pêche|Abricot; Nectarine|Brugnon; Prune|Mirabelle; Cerise|Griotte; Fraise|Framboise; Mûre|Myrtille;
Groseille|Cassis; Melon|Pastèque; Ananas|Mangue; Papaye|Goyave; Kiwi|Fruit de la passion; Figue|Datte; Raisin|Litchi; Pamplemousse|Pomelo; Noix|Noisette; Amande|Pistache;

Carotte|Panais; Pomme de terre|Patate douce; Courgette|Concombre; Potiron|Citrouille; Navet|Radis; Oignon|Échalote; Ail|Poireau; Chou-fleur|Brocoli; Laitue|Batavia; Épinard|Oseille;
Petit pois|Haricot vert; Lentille|Pois chiche; Aubergine|Poivron; Betterave|Céleri-rave; Endive|Fenouil; Artichaut|Asperge; Tomate|Tomate cerise; Roquette|Mâche; Champignon|Truffe; Maïs|Blé;

Pizza|Quiche; Burger|Sandwich; Lasagnes|Gratin; Risotto|Paella; Couscous|Taboulé; Ratatouille|Tian; Pot-au-feu|Bœuf bourguignon; Raclette|Fondue; Omelette|Œufs brouillés; Soupe|Velouté;
Purée|Polenta; Frites|Potatoes; Steak|Côtelette; Poulet rôti|Dinde rôtie; Saucisse|Merguez; Boulettes|Falafels; Croque-monsieur|Panini; Crêpe|Galette; Raviolis|Tortellinis; Salade composée|Salade de pâtes;

Tarte|Gâteau; Brownie|Fondant; Éclair|Religieuse; Millefeuille|Paris-brest; Macaron|Meringue; Chou à la crème|Profiterole; Flan|Clafoutis; Crème brûlée|Crème caramel; Mousse au chocolat|Crème au chocolat; Tiramisu|Charlotte;
Gaufre|Pancake; Beignet|Churros; Madeleine|Financier; Cookie|Sablé; Sorbet|Glace; Compote|Confiture; Riz au lait|Semoule au lait; Nougat|Calisson; Bonbon|Guimauve; Chocolat|Caramel;

Café|Thé; Chocolat chaud|Cappuccino; Espresso|Café filtre; Latte|Café au lait; Thé vert|Thé noir; Tisane|Infusion; Jus de pomme|Jus de raisin; Jus d'orange|Jus de pamplemousse; Limonade|Citronnade; Soda|Eau gazeuse;
Sirop|Jus de fruits; Smoothie|Milkshake; Lait|Lait d'amande; Eau plate|Eau pétillante; Eau minérale|Eau de source; Bière|Cidre; Vin rouge|Vin blanc; Champagne|Vin pétillant; Cocktail|Mocktail; Thé glacé|Café glacé;

Croissant|Pain au chocolat; Brioche|Pain au lait; Baguette|Pain de campagne; Pain de mie|Pain complet; Biscotte|Tartine; Muesli|Granola; Flocons d'avoine|Corn flakes; Yaourt|Fromage blanc; Beurre|Margarine; Miel|Sirop d'érable;
Pâte à tartiner|Beurre de cacahuète; Œuf à la coque|Œuf dur; Toast|Pain perdu; Barre de céréales|Barre chocolatée; Crackers|Bretzel; Chips|Pop-corn; Cacahuète|Noix de cajou; Raisin sec|Abricot sec; Pain d'épices|Cake; Biscuit|Génoise;

Sel|Poivre; Sucre|Cassonade; Farine|Fécule; Levure|Levain; Huile|Vinaigre; Moutarde|Mayonnaise; Ketchup|Sauce barbecue; Crème fraîche|Crème liquide; Basilic|Persil; Thym|Romarin;
Coriandre|Ciboulette; Menthe|Verveine; Cannelle|Vanille; Cumin|Curry; Paprika|Piment; Gingembre|Curcuma; Muscade|Clou de girofle; Bouillon|Fond de sauce; Chapelure|Croûtons; Sauce soja|Sauce teriyaki;

Casserole|Marmite; Poêle|Sauteuse; Four|Micro-ondes; Grille-pain|Gaufrier; Mixeur|Blender; Fouet|Spatule; Louche|Écumoire; Passoire|Tamis; Râpe|Économe; Couteau|Ciseaux de cuisine;
Assiette|Bol; Tasse|Mug; Verre|Gobelet; Fourchette|Cuillère; Plat|Saladier; Carafe|Pichet; Bouilloire|Cafetière; Planche à découper|Billot; Rouleau à pâtisserie|Emporte-pièce; Balance|Verre doseur;

Lion|Tigre; Léopard|Guépard; Jaguar|Panthère; Loup|Renard; Ours|Panda; Gorille|Chimpanzé; Orang-outan|Babouin; Éléphant|Rhinocéros; Hippopotame|Buffle; Girafe|Okapi;
Zèbre|Antilope; Gazelle|Impala; Cerf|Chevreuil; Élan|Renne; Sanglier|Phacochère; Kangourou|Wallaby; Koala|Paresseux; Raton laveur|Blaireau; Loutre|Castor; Hérisson|Porc-épic;

Chat|Chien; Chaton|Chiot; Hamster|Cochon d'Inde; Lapin|Lièvre; Souris|Rat; Gerbille|Chinchilla; Furet|Belette; Cheval|Poney; Âne|Mulet; Vache|Bœuf;
Veau|Agneau; Mouton|Chèvre; Cochon|Truie; Poule|Coq; Canard|Oie; Dindon|Pintade; Poussin|Caneton; Berger allemand|Labrador; Caniche|Bichon; Siamois|Persan;

Aigle|Faucon; Hibou|Chouette; Corbeau|Corneille; Pie|Geai; Moineau|Mésange; Rouge-gorge|Bouvreuil; Hirondelle|Martinet; Pigeon|Tourterelle; Mouette|Goéland; Pélican|Cormoran;
Flamant rose|Héron; Cigogne|Grue; Cygne|Oie sauvage; Perroquet|Perruche; Toucan|Calao; Autruche|Émeu; Paon|Faisan; Colibri|Martin-pêcheur; Pic vert|Pic épeiche; Pingouin|Manchot;

Dauphin|Marsouin; Baleine|Cachalot; Orque|Requin; Phoque|Otarie; Morse|Éléphant de mer; Poulpe|Calmar; Seiche|Nautile; Crabe|Homard; Crevette|Langoustine; Langouste|Écrevisse;
Moule|Huître; Coquille Saint-Jacques|Palourde; Méduse|Anémone; Étoile de mer|Oursin; Saumon|Truite; Thon|Espadon; Sardine|Anchois; Cabillaud|Colin; Sole|Turbot; Hippocampe|Poisson-clown;

Abeille|Guêpe; Bourdon|Frelon; Papillon|Libellule; Coccinelle|Scarabée; Fourmi|Termite; Mouche|Moustique; Criquet|Sauterelle; Grillon|Cigale; Chenille|Ver à soie; Araignée|Scorpion;
Escargot|Limace; Ver de terre|Sangsue; Grenouille|Crapaud; Salamandre|Triton; Lézard|Gecko; Iguane|Caméléon; Crocodile|Alligator; Tortue|Tortue marine; Cobra|Vipère; Boa|Python;

Rose|Tulipe; Marguerite|Pâquerette; Lys|Iris; Tournesol|Coquelicot; Orchidée|Hibiscus; Lavande|Lilas; Jasmin|Chèvrefeuille; Jonquille|Narcisse; Pivoine|Dahlia; Géranium|Pétunia;
Chêne|Hêtre; Sapin|Épicéa; Pin|Cèdre; Bouleau|Peuplier; Saule|Frêne; Palmier|Cocotier; Olivier|Figuier; Érable|Platane; Cactus|Aloès; Fougère|Mousse;

Forêt|Jungle; Prairie|Savane; Désert|Steppe; Colline|Montagne; Vallée|Gorge; Canyon|Ravin; Falaise|Rocher; Grotte|Caverne; Volcan|Geyser; Glacier|Banquise;
Île|Presqu'île; Archipel|Atoll; Dune|Oasis; Marais|Marécage; Étang|Lac; Rivière|Fleuve; Ruisseau|Torrent; Cascade|Chute d'eau; Plage|Crique; Lagon|Baie;

Pluie|Neige; Grêle|Grésil; Bruine|Averse; Orage|Tempête; Tonnerre|Éclair; Brume|Brouillard; Rosée|Givre; Gel|Verglas; Vent|Brise; Ouragan|Tornade;
Cyclone|Typhon; Canicule|Sécheresse; Nuage|Brouillard; Arc-en-ciel|Aurore boréale; Aube|Crépuscule; Lever de soleil|Coucher de soleil; Éclaircie|Ensoleillement; Flocon|Goutte; Météo|Climat; Parapluie|Imperméable;

Ville|Village; Rue|Avenue; Boulevard|Allée; Place|Esplanade; Trottoir|Passage piéton; Rond-point|Carrefour; Pont|Passerelle; Tunnel|Souterrain; Parc|Jardin public; Square|Aire de jeux;
Mairie|Préfecture; Bibliothèque|Médiathèque; Musée|Galerie; Église|Cathédrale; Château|Palais; Stade|Gymnase; Piscine|Patinoire; Gare|Aéroport; Port|Marina; Fontaine|Bassin;

Maison|Appartement; Studio|Loft; Villa|Pavillon; Chalet|Cabane; Cuisine|Salle à manger; Salon|Séjour; Chambre|Dortoir; Salle de bains|Salle d'eau; Grenier|Cave; Garage|Carport;
Balcon|Terrasse; Patio|Véranda; Couloir|Vestibule; Escalier|Échelle; Porte|Portail; Fenêtre|Baie vitrée; Volet|Store; Toit|Plafond; Mur|Cloison; Parquet|Carrelage;

Canapé|Fauteuil; Chaise|Tabouret; Banc|Banquette; Table|Bureau; Lit|Canapé-lit; Matelas|Sommier; Oreiller|Coussin; Couette|Couverture; Drap|Housse; Armoire|Commode;
Étagère|Bibliothèque; Buffet|Vaisselier; Lampe|Lampadaire; Lustre|Plafonnier; Tapis|Moquette; Rideau|Voilage; Miroir|Cadre; Vase|Cache-pot; Horloge|Pendule; Bougie|Photophore;

T-shirt|Polo; Chemise|Chemisier; Pull|Gilet; Sweat|Veste; Manteau|Parka; Doudoune|Anorak; Blouson|Perfecto; Pantalon|Jean; Short|Bermuda; Jupe|Robe;
Legging|Collant; Chaussette|Bas; Pyjama|Chemise de nuit; Peignoir|Robe de chambre; Costume|Smoking; Salopette|Combinaison; Maillot de bain|Bikini; Bonnet|Cagoule; Écharpe|Foulard; Gant|Moufle;

Casquette|Chapeau; Béret|Bob; Baskets|Tennis; Bottes|Bottines; Sandales|Tongs; Mocassins|Derbies; Chaussons|Pantoufles; Escarpins|Ballerines; Sac à dos|Sac à main; Cabas|Besace;
Portefeuille|Porte-monnaie; Ceinture|Bretelles; Cravate|Nœud papillon; Collier|Bracelet; Bague|Alliance; Boucles d'oreilles|Piercing; Montre|Montre connectée; Lunettes|Lentilles; Broche|Pendentif; Barrette|Élastique;

Savon|Gel douche; Shampoing|Après-shampoing; Dentifrice|Bain de bouche; Brosse à dents|Fil dentaire; Peigne|Brosse à cheveux; Rasoir|Tondeuse; Serviette|Drap de bain; Déodorant|Parfum; Crème solaire|Crème hydratante; Coton|Coton-tige;
Mouchoir|Essuie-tout; Éponge|Gant de toilette; Sèche-cheveux|Fer à lisser; Rouge à lèvres|Baume à lèvres; Mascara|Eyeliner; Fond de teint|Poudre; Vernis|Dissolvant; Coupe-ongles|Lime; Lessive|Adoucissant; Balai|Aspirateur;

Main|Pied; Bras|Jambe; Coude|Genou; Doigt|Orteil; Poignet|Cheville; Épaule|Hanche; Dos|Ventre; Cou|Nuque; Front|Menton; Joue|Pommette;
Œil|Oreille; Nez|Bouche; Dent|Langue; Sourcil|Cil; Ongle|Cheveu; Cœur|Poumon; Muscle|Tendon; Os|Cartilage; Veine|Artère; Peau|Épiderme;

Médecin|Infirmier; Dentiste|Orthodontiste; Kinésithérapeute|Ostéopathe; Opticien|Ophtalmologue; Pharmacien|Préparateur en pharmacie; Hôpital|Clinique; Urgences|Réanimation; Cabinet médical|Dispensaire; Ambulance|Véhicule de pompiers; Stéthoscope|Tensiomètre;
Thermomètre|Oxymètre; Pansement|Bandage; Béquille|Canne; Fauteuil roulant|Déambulateur; Plâtre|Attelle; Comprimé|Gélule; Sirop|Pastille; Pommade|Gel; Radiographie|Échographie; Rhume|Grippe;

Boulanger|Pâtissier; Boucher|Charcutier; Cuisinier|Traiteur; Serveur|Barman; Coiffeur|Barbier; Couturier|Styliste; Peintre|Décorateur; Maçon|Carreleur; Plombier|Chauffagiste; Électricien|Électronicien;
Menuisier|Ébéniste; Architecte|Urbaniste; Jardinier|Paysagiste; Agriculteur|Maraîcher; Pêcheur|Marin; Pilote|Conducteur; Facteur|Livreur; Journaliste|Reporter; Avocat|Notaire; Policier|Gendarme;

École|Collège; Lycée|Université; Classe|Amphithéâtre; Professeur|Instituteur; Élève|Étudiant; Cahier|Classeur; Crayon|Stylo; Feutre|Surligneur; Gomme|Correcteur; Règle|Équerre;
Compas|Rapporteur; Trousse|Cartable; Tableau|Ardoise; Craie|Marqueur; Exercice|Devoir; Contrôle|Examen; Note|Moyenne; Récréation|Pause; Cantine|Réfectoire; Diplôme|Certificat;

Agrafeuse|Perforatrice; Trombone|Pince à documents; Post-it|Bloc-notes; Enveloppe|Pochette; Tampon|Cachet; Calendrier|Agenda; Imprimante|Photocopieur; Scanner|Fax; Réunion|Conférence; Entretien|Rendez-vous;
Collègue|Coéquipier; Patron|Manager; Open space|Bureau individuel; Télétravail|Travail sur site; Courriel|Courrier; Signature|Paraphe; Dossier|Archive; Contrat|Devis; Facture|Reçu; Salaire|Prime;

Ordinateur|Tablette; Téléphone|Smartphone; Clavier|Souris; Écran|Moniteur; Casque|Écouteurs; Microphone|Haut-parleur; Webcam|Caméra; Disque dur|Clé USB; Chargeur|Batterie externe; Câble|Adaptateur;
Wi-Fi|Bluetooth; Internet|Intranet; Site web|Application; Navigateur|Moteur de recherche; Mot de passe|Code PIN; Fichier|Dossier numérique; Télécharger|Téléverser; Copier|Coller; Sauvegarde|Synchronisation; Robot|Drone;

Voiture|Camionnette; Camion|Semi-remorque; Bus|Car; Tramway|Métro; Train|TGV; Vélo|Trottinette; Moto|Scooter; Cyclomoteur|Vélo électrique; Avion|Hélicoptère; Planeur|ULM;
Montgolfière|Dirigeable; Bateau|Sous-marin; Voilier|Catamaran; Ferry|Paquebot; Canoë|Kayak; Péniche|Barge; Taxi|VTC; Ambulance|Fourgon; Tracteur|Moissonneuse; Caravane|Camping-car;

Valise|Sac de voyage; Passeport|Carte d'identité; Billet|Carte d'embarquement; Hôtel|Auberge; Camping|Gîte; Tente|Yourte; Chambre d'hôtel|Suite; Réception|Conciergerie; Réservation|Enregistrement; Départ|Arrivée;
Escale|Correspondance; Séjour|Circuit; Excursion|Visite guidée; Touriste|Voyageur; Guide|Accompagnateur; Carte routière|GPS; Bagage cabine|Bagage en soute; Douane|Contrôle de sécurité; Souvenir|Carte postale; Vacances|Week-end;

Football|Rugby; Basket|Handball; Tennis|Badminton; Ping-pong|Squash; Volley|Beach-volley; Baseball|Cricket; Hockey sur glace|Hockey sur gazon; Golf|Mini-golf; Pétanque|Bowling; Billard|Snooker;
Ballon|Balle; Raquette|Batte; But|Panier; Filet|Cage de but; Gardien|Défenseur; Attaquant|Buteur; Arbitre|Entraîneur; Match|Tournoi; Équipe|Club; Médaille|Trophée;

Course à pied|Marche sportive; Sprint|Marathon; Saut en hauteur|Saut en longueur; Lancer de poids|Lancer de disque; Natation|Plongée; Surf|Bodyboard; Planche à voile|Kitesurf; Aviron|Canoë-kayak; Ski|Snowboard; Luge|Bobsleigh;
Patinage|Roller; Escalade|Alpinisme; Randonnée|Trekking; Cyclisme|VTT; Équitation|Dressage; Boxe|Kick-boxing; Judo|Karaté; Yoga|Pilates; Gymnastique|Acrobatie; Escrime|Tir à l'arc;

Dessin|Peinture; Aquarelle|Gouache; Fusain|Pastel; Croquis|Esquisse; Portrait|Autoportrait; Sculpture|Poterie; Argile|Pâte à modeler; Tricot|Crochet; Couture|Broderie; Origami|Papier mâché;
Photographie|Vidéo; Objectif|Zoom; Chevalet|Pupitre; Palette|Godet; Pinceau|Rouleau; Toile|Papier à dessin; Fresque|Mosaïque; Collage|Scrapbooking; Maquette|Modélisme; Calligraphie|Lettrage;

Guitare|Piano; Violon|Alto; Violoncelle|Contrebasse; Flûte|Clarinette; Trompette|Trombone; Saxophone|Hautbois; Batterie|Percussions; Tambour|Tambourin; Xylophone|Marimba; Harpe|Lyre;
Accordéon|Harmonica; Ukulélé|Banjo; Chanteur|Choriste; Orchestre|Fanfare; Chœur|Chorale; Concert|Récital; Opéra|Comédie musicale; Mélodie|Refrain; Rythme|Tempo; Partition|Tablature;

Cinéma|Théâtre; Film|Série; Documentaire|Reportage; Comédie|Parodie; Thriller|Film d'horreur; Dessin animé|Film d'animation; Court-métrage|Long-métrage; Acteur|Comédien; Réalisateur|Scénariste; Scène|Séquence;
Roman|Nouvelle; Conte|Légende; Poème|Fable; Bande dessinée|Manga; Livre|Magazine; Journal|Revue; Auteur|Écrivain; Chapitre|Paragraphe; Préface|Épilogue; Librairie|Bouquinerie;

Échecs|Dames; Dominos|Mah-jong; Poker|Belote; Tarot|Bridge; Bataille|Réussite; Loto|Bingo; Puzzle|Casse-tête; Jeu de piste|Chasse au trésor; Cache-cache|Chat perché; Marelle|Corde à sauter;
Billes|Toupie; Poupée|Peluche; Marionnette|Pantin; Cerf-volant|Avion en papier; Balançoire|Toboggan; Manège|Grande roue; Dés|Jetons; Console|Borne d'arcade; Manette|Joystick; Jeu de rôle|Jeu de plateau;

Anniversaire|Fête; Mariage|Fiançailles; Noël|Nouvel An; Carnaval|Halloween; Pâques|Chandeleur; Festival|Kermesse; Défilé|Parade; Bal|Soirée dansante; Pique-nique|Barbecue; Banquet|Buffet;
Cadeau|Surprise; Ballon de baudruche|Lampion; Guirlande|Banderole; Confettis|Serpentins; Déguisement|Costume de scène; Invitation|Faire-part; Feu d'artifice|Pétard; Toast|Discours; Bougie d'anniversaire|Cierge magique; Réveillon|Repas de famille;

Joie|Bonheur; Tristesse|Mélancolie; Colère|Rage; Peur|Inquiétude; Surprise|Étonnement; Fierté|Satisfaction; Honte|Gêne; Jalousie|Envie; Ennui|Lassitude; Espoir|Optimisme;
Courage|Audace; Patience|Calme; Timidité|Discrétion; Générosité|Gentillesse; Curiosité|Intérêt; Confiance|Assurance; Nostalgie|Regret; Tendresse|Affection; Motivation|Détermination; Soulagement|Apaisement;

Marcher|Courir; Sauter|Bondir; Nager|Flotter; Monter|Grimper; Glisser|Déraper; Parler|Chuchoter; Crier|Hurler; Rire|Sourire; Pleurer|Sangloter; Chanter|Fredonner;
Regarder|Observer; Écouter|Entendre; Chercher|Fouiller; Trouver|Découvrir; Porter|Transporter; Pousser|Tirer; Ouvrir|Fermer; Acheter|Louer; Ranger|Trier; Dessiner|Colorier;

Marteau|Maillet; Tournevis|Visseuse; Perceuse|Perforateur; Scie|Scie sauteuse; Pince|Tenaille; Clé plate|Clé à molette; Clou|Vis; Écrou|Rondelle; Mètre ruban|Règle graduée; Niveau à bulle|Fil à plomb;
Truelle|Taloche; Pelle|Bêche; Pioche|Piolet; Râteau|Fourche; Sécateur|Cisaille; Tondeuse|Débroussailleuse; Brouette|Diable; Échafaudage|Escabeau; Papier de verre|Lime à bois; Étau|Serre-joint;

Bois|Liège; Métal|Acier; Fer|Fonte; Cuivre|Bronze; Aluminium|Étain; Or|Argent; Verre|Cristal; Plastique|Résine; Caoutchouc|Silicone; Cuir|Similicuir;
Coton|Lin; Laine|Cachemire; Soie|Satin; Velours|Daim; Pierre|Béton; Brique|Parpaing; Marbre|Granit; Ciment|Plâtre; Sable|Gravier; Papier|Carton;

Lune|Soleil; Étoile|Planète; Comète|Astéroïde; Météore|Météorite; Galaxie|Nébuleuse; Satellite|Sonde spatiale; Fusée|Navette spatiale; Astronaute|Cosmonaute; Télescope|Lunette astronomique; Mars|Vénus;
Jupiter|Saturne; Terre|Neptune; Éclipse|Transit; Orbite|Trajectoire; Atome|Molécule; Électron|Proton; Aimant|Boussole; Microscope|Loupe; Éprouvette|Tube à essai; Énergie|Électricité;

Seconde|Minute; Heure|Journée; Semaine|Mois; Année|Décennie; Siècle|Millénaire; Matin|Soir; Midi|Minuit; Hier|Demain; Aujourd'hui|Maintenant; Printemps|Automne;
Été|Hiver; Janvier|Février; Juillet|Août; Lundi|Mardi; Samedi|Dimanche; Aube|Aurore; Pause|Repos; Retard|Avance; Chronomètre|Minuteur; Calendrier|Éphéméride;

Mer|Océan; Golfe|Détroit; Estuaire|Delta; Source|Embouchure; Rive|Berge; Côte|Littoral; Cap|Pointe; Continent|Pays; Région|Département; Capitale|Métropole;
Frontière|Limite; Équateur|Tropique; Nord|Sud; Est|Ouest; Latitude|Longitude; Planisphère|Globe terrestre; Boussole|Rose des vents; Carte|Atlas; Relief|Altitude; Péninsule|Isthme;

Plage|Piscine; Sable|Galet; Coquillage|Corail; Vague|Houle; Marée|Courant; Écume|Embruns; Phare|Balise; Bouée|Brassard; Masque|Tuba; Palmes|Combinaison de plongée;
Parasol|Tente de plage; Transat|Chaise longue; Serviette de plage|Fouta; Seau|Arrosoir; Château de sable|Sculpture de sable; Port de pêche|Port de plaisance; Jetée|Digue; Ancre|Amarre; Gouvernail|Barre; Sauveteur|Maître-nageur;

Sommet|Pic; Col|Crête; Versant|Pente; Refuge|Chalet; Sentier|Chemin; Bâton de marche|Bâton de ski; Raquettes à neige|Crampons; Téléphérique|Télésiège; Téléski|Funiculaire; Piste verte|Piste bleue;
Avalanche|Éboulement; Alpage|Pâturage; Bergerie|Étable; Ferme|Grange; Champ|Pré; Verger|Potager; Haie|Clôture; Bottes de paille|Bottes de foin; Chamois|Bouquetin; Marmotte|Écureuil;

Fantôme|Zombie; Vampire|Loup-garou; Sorcier|Magicien; Fée|Elfe; Lutin|Gnome; Troll|Ogre; Dragon|Wyverne; Licorne|Pégase; Sirène|Triton mythologique; Géant|Titan;
Chevalier|Paladin; Roi|Empereur; Reine|Princesse; Prince|Duc; Château fort|Forteresse; Donjon|Tour; Épée|Sabre; Bouclier|Armure; Potion|Élixir; Baguette magique|Grimoire;

Sushi|Maki; Sashimi|Tartare; Ramen|Pho; Nem|Rouleau de printemps; Wok|Teppanyaki; Dim sum|Gyoza; Naan|Chapati; Samosa|Pakora; Tacos|Burrito; Quesadilla|Enchilada;
Guacamole|Houmous; Kebab|Gyros; Pita|Focaccia; Tapas|Mezzé; Gaspacho|Soupe froide; Gnocchis|Spaetzle; Fondue savoyarde|Tartiflette; Choucroute|Potée; Brandade|Parmentier; Bouillabaisse|Soupe de poisson;

Boulangerie|Pâtisserie; Boucherie|Poissonnerie; Épicerie|Supérette; Supermarché|Hypermarché; Marché|Halles; Boutique|Grand magasin; Kiosque|Stand; Fleuriste|Pépinière; Quincaillerie|Droguerie; Pharmacie|Parapharmacie;
Bureau de poste|Relais colis; Banque|Bureau de change; Station-service|Borne de recharge; Laverie|Pressing; Salon de coiffure|Institut de beauté; Restaurant|Brasserie; Café|Salon de thé; Bar|Pub; Billetterie|Guichet; Office de tourisme|Agence de voyages;

Silence|Calme; Bruit|Vacarme; Lumière|Clarté; Ombre|Obscurité; Chaleur|Tiédeur; Froid|Fraîcheur; Vitesse|Rapidité; Lenteur|Immobilité; Poids|Masse; Taille|Hauteur;
Largeur|Longueur; Distance|Écart; Début|Commencement; Fin|Conclusion; Question|Énigme; Réponse|Solution; Secret|Mystère; Hasard|Chance; Règle|Consigne; Promesse|Engagement
`.trim().split(/\s*;\s*/).map((pair) => pair.split("|"));
