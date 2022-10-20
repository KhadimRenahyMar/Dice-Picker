### Table des matières
0. A propos 

1. [Processus](#processus)
    - MVP
    - User-stories
    - Design
    - UX

2. [Conclusion](#conclusion)


## A propos
Dice Picker est une amélioration de l'exercice [Dice Roller](https://github.com/KhadimRenahyMar/Dice-Picker/tree/main/Dice-roller-KhadimRenahyMar) dont l'objectif est de tirer un jeu de dés de façon aléatoire. Ces deux projets partagent cette fonctionnalité mais l'exploitent différement, ce qui change la façon dont les utilisateurs interagissent avec le Dice Picker. 

Ces programmes étant très simple, ils représentent un cas d'étude parfait pour observer la place d'une donnée dans son cadre d'interaction.

Ce rapport d'expérience explore donc l'impact que produit le changement du contexte d'une donnée sur l'expérience utilisateur.

Bonne lecture,

## Processus
### Produit minimum viable (MVP)
Dice Picker permet à ses visiteurs de sélectionner aléatoirement une proposition (chaîne de caractères) parmi un ensemble de propositions préalablement fournies. Chaque proposition se voit attribuer un dé : au tirage, un nombre aléatoire est attribué à chaque dé (de 1 à 6) et celui obtenant le plus haut score l'emporte.

### User-stories
|Route| En tant que visiteur je veux ... | afin ...|
|--|--|--|
|/|consulter un guide d'utilisation|comprendre la bonne utilisation du Dice Picker|
|/|pouvoir entrer au moins deux propositions|de personnaliser mon expérience|
|/|pouvoir lancer les dés|de soumettre les propositions au tirage|
|/|pouvoir ajouter un champ à la liste des propositions|de soumettre une nouvelle proposition au tirage |

### Design
#### Couleurs
Dice Picker et Dice Roller utilisent du Orange Peel (#f39c12) comme couleur principale car c'est une couleur dynamique qui évoque l'interaction et le jeu. Elles l'accompagnent d'un Eerie black (#202020) dans leur header afin de créer un contraste simple entre le titre et l'espace de jeu.

#### Accessibilité
Afin de permettre aux personnes souffrant d'un handicap visuel de bénéficier d'une expérience utilisateur similaire à celle proposée aux utilisateurs valides, l'attribut "alt" de chaque image de dé est modifié pour refléter le nombre aléatoire affiché. 

#### Responsive
L'approche "mobile first" et l'utilisation de flexbox CSS a permis de limiter le besoin d'adaptation du design aux différents formats d'écrans. La seule modification véritablement perceptible est l'augmentation de la taille des boutons dont le but est d'offrir une expérience utilisateur plus confortable sur mobile.

### UX

Dès son arrivée sur la zone de jeu, le visiteur rencontre la notice d'utilisation du Dice Picker. Cette notice détaille les fonctionnalités du programme et s'adresse au visiteur dans un registre familier afin de cadrer ses attentes et de mettre l'aspect ludique du Dice Picker au premier plan.

Vient ensuite la section contenant champs de saisie et boutons. La taille et la simplicité esthétique de ces éléments permet de souligner leur interactivité et invite implicitement l'utilisateur à s'en servir.

Après avoir personnalisé ses propositions, l'utilisateur peu lancer le tirage : les dés sont affichés directement et un message confirme alors le résultat. 
Enfin, s'il choisit de relancer un tirage, une alerte lui demande de confirmer son souhait.

Ainsi, afin de maximiser l'intérêt du tirage, l'utilisateur est mis à contribution et formate ses propositions en fonction de ses propres attentes.

L'interprétation plus personnelle données rend alors l'expérience utilisateur plus souple et lui prête des caractéristiques de jeu "bac à sable", maximisant également les possibilités d'utilisation et la rejouabilité.

En usant du tirage comme d'un moyen au service de l'utilisateur plutôt que comme une fin en soi, l'expérience utilisateur devient plus évidente et pertinente.

## Conclusion
Alors que Dice Roller avait pour but d'afficher plusieurs dés,Dice Picker s'éloigne de cette logique d'affichage pour mettre à profit son concept, la sélection aléatoire.

Dans le cadre de ce nouvel enjeu, la plus-value ne se situe alors plus dans la restitution de la donnée mais dans son traitement par le Dice Picker lui-même.

Dice Roller limitait également l'interaction utilisateur au choix d'un nombre, Dice Picker use de chaînes de caractères, bénéficiant donc d'un champ d'interprétation plus vaste.

En laissant à l'utilisateur le contrôle du sens de la donnée, Dice Picker semble s'affranchir des limites du concept du Dice Roller pour exploiter pleinement le sien, fondé sur l'intention de ces utilisateurs.

Il apparait donc que le contexte d'utilisation d'une donnée modifie profondément la pertinence de son cadre d'interaction. Choisir un contexte ouvert permet aux utilisateurs de mieux s'approprier leur outil, ce qui libère le programme de la responsabilité de la pertinence.