# README - Jeu Tic Tac Toe 20x20

## Contexte du projet

L'entreprise MediaGame est une start-up spécialisée dans les jeux en ligne. Elle souhaite améliorer l'expérience de ses utilisateurs en leur permettant de découvrir de nouveaux jeux. Dans cette optique, elle a décidé de créer un jeu de Tic Tac Toe (Morpion) 20x20.

L'objectif du projet est d'implémenter un jeu de Tic Tac Toe à deux joueurs en utilisant JavaScript. Le joueur 1 commencera à jouer, et les deux joueurs effectueront leurs mouvements lors de tours consécutifs.

Le joueur qui réussit à former une chaîne droite de 5 blocs remporte la partie. Ce jeu sera construit en front-end en utilisant uniquement HTML et CSS pour l'interface utilisateur, la manipulation du DOM pour les interactions, et les données seront stockées localement à l'aide du local storage.

## Interface de jeu

Le jeu doit afficher un plateau de jeu de 20x20 cases. Deux joueurs devront pouvoir jouer tour à tour en cliquant sur une case vide du plateau pour y placer soit un "X", soit un "O". Il est important d'indiquer clairement quel joueur (X ou O) doit jouer à chaque tour.

## Mécanique de jeu

Le jeu doit détecter et annoncer un gagnant dès qu'un des joueurs réussit à aligner 5 de ses symboles (X ou O) en ligne, en colonne ou en diagonale. Si toutes les cases sont remplies et qu'aucun joueur n'a aligné 5 de ses symboles, le jeu doit annoncer un match nul.

## Fonctions supplémentaires

- Ajoutez un bouton pour recommencer une nouvelle partie sans avoir à rafraîchir la page.
- Gardez un score des victoires pour chaque joueur et affichez-le à côté du plateau.
- Optionnel : Permettez aux joueurs de choisir leur symbole avant de commencer une partie.

## Design et réactivité

- Assurez-vous que le jeu est jouable sur des appareils mobiles (smartphones, tablettes) ainsi que sur des ordinateurs de bureau.
- Appliquez des styles de base pour rendre le jeu visuellement attrayant.

## Code

- Structurez votre code en utilisant des fonctions pour séparer les différentes logiques de jeu.
- Commentez votre code de manière à ce qu'une autre personne puisse le comprendre facilement.
- Assurez-vous de bien tester votre jeu pour éliminer tout bug éventuel.

## Outils et technologies recommandés

- HTML : Pour la structure de base du jeu.
- CSS : Pour styliser l'interface utilisateur.
- JavaScript : Pour la logique et les interactions du jeu.

## Conseils

- Commencez par la mise en place de l'interface utilisateur avec HTML et CSS.
- Testez chaque fonctionnalité au fur et à mesure de sa mise en place.
- Vous pouvez envisager d'utiliser des bibliothèques comme jQuery si vous êtes à l'aise avec, mais cela n'est pas strictement nécessaire.
- Assurez-vous de bien comprendre les règles du Tic Tac Toe et la manière dont les gagnants sont déterminés avant de coder la logique.

---

Ce README fournit une vue d'ensemble du projet du jeu Tic Tac Toe 20x20. Assurez-vous de suivre les directives et de concevoir un jeu fonctionnel et agréable pour les utilisateurs. Bonne chance avec votre projet !