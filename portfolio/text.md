### Table des matières
0. A propos 

1. [Processus](#processus)
    - MVP
    - UX
    - User-stories
    - Choix technologique
    - Design

2. [Conclusion](#conclusion)


## A propos
Ce projet est une amélioration de l'exercice [Dice Roller]() dont l'objectif est de simuler le lancer aléatoire de plusieurs dés. Si les deux jeux partages la génération aléatoire de dés comme clé de voute, le Dice Picker oriente sa logique autours d'une expérience utilisateur plus pertinente que le Dice Roller.

En effet, alors que le Dice Roller offre simplement à ses visiteurs d'entrer le nombre de dés qu'ils souhaitent voir s'afficher à l'écran, le Dice Picker receuille une chaîne de caractère de la part de l'utilisateur et modifie le rôle de cette donnée pour trouver son enjeu dans le tirage même.

Ce rapport d'expérience tente d'explorer le rapport qu'entretien la donnée et son contexte.
Bonne lecture,

## Processus

### Produit minimum viable (MVP)
L'objectif de ce défi est de proposer aux visiteurs de séléctionner aléatoirement une proposition parmis une liste de plusieurs propositions soumises aux préalable. Chaque propositions se voit attribuer un dés, le dés obtenant le plus haut score l'emporte et la proposition qui lui est attribuée avec.

### UX
Le Dice Roller n'ayant pour usage que d'être un exercice de programmation, le Dice Picker devait proposer une experience utilisateur plus pertinente. Pour cela, il a fallu offrir un autre rôle au tirage et une autre place à la donnée entrée par l'utilisateur.
Afin de maximiser la pertinence du tirage pour l'utilisateur, nul n'est mieux placé que l'utilisateur lui-même pour séléctionner et formatter les propositions en fonction de ses attentes. En changeant le type de ces données et en faisant reposer leur interprétation sur le résultat du tirage, l'enjeu n'est plus de voir apparaitre des dés mais d'offrir du sens au contexte entourant le tirage. Ce contexte d'interprétation des données ouvert rend l'experience utilisateur souple et lui prête des caractéristique de jeu "bac à sable", maximisant ainsi les possibilités d'utilisation au plus proches des attentes utilisateurs. 


### User-stories
|Routes (frontend)| En tant que visiteur je veux ... | afin ...|
|--|--|--|
|/|consulter un guide d'utilisation|comprendre la bonne utilisation du Dice Picker|
|/|pouvoir entrer au moins deux propositions|de personnaliser mon expérience|
|/|pouvoir lancer la génération de dés|soumettre les propositions au tirage|
|/|pouvoir ajouter un champ à la liste des propositions|de soumettre une nouvelle proposition au tirage |

### Design
#### Couleurs
Les deux jeux utilisent du Orange Peel (#f39c12) comme couleur principale car c'est une couleur dynamique qui évoque l'interaction et le jeu. Elles l'accompagnent d'un Eerie black (#202020) dans leur header afin de créer un contraste simple entre les éléments d'information et ceux d'intéractions.

#### Accessibilité
Afin de permettre aux personnes souffrant d'un handicap visuel de pouvoir bénéficier d'une expérience utilisateur similaire à celle proposée aux utilisateurs valides, l'attribut "alt" de chaque dés est modifié pour refléter le nombre aléatoire afficher. 

#### Responsive
L'approche "mobile first" et l'utilisation de flexbox CSS a permis de limiter le besoin d'adaptation du design sur différents formats. La seule modification véritablement perceptible est l'augmentation de la taille des boutons afin d'offrir une expérience utilisateur plus confortable sur écran tactile.

## Conclusion
