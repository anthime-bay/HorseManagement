## Introduction 
L’objet de mon stage a consisté à prototyper une application web affichant une liste de 
chevaux de course ainsi qu’une fiche détail indiquant les caractéristiques. 
Nous allons découvrir par la suite les technologies mises en œuvre dans le cadre de ce 
prototype. Certaines briques logicielles avaient été vues en cours, d’autres ne l’étaient pas. 
# L’organisation et les moyens mis en œuvre 
En tout début de stage, mon responsable m’a exposé sa vision du prototype à mettre œuvre 
et comment ce type de développement devait être implémentée à l’aide des technologies 
SQLite, NodeJs, Web API, Typescript, Bootstrap, HTML5 et CSS. 
D’un point de vue de l’organisation, mon responsable m’a demandé de consacrer 2 à 3 jours 
sur chaque langage et framework que je devais utiliser dans le cadre du développement. A 
l’issue de chaque étape de formation, mon responsable me posait des questions pour 
comprendre comment j’allais utiliser la technologie en question. 
Ensuite, je devais développer chaque partie de l’application en démarrant par la modélisation 
de la base de données pour aboutir à la présentation graphique. 
A l’issue de chaque journée, mon responsable parcourait l’avancement des développements. 
# Boostrap 
Pour mener à bien cette mission j’ai du tout d’abord apprendre le framework Bootstrap. 
Présentons dans un premier temps la technologie. 
Bootstrap est un framework HTML/CSS développé par Twitter et qui permet de réaliser des 
sites responsifs de manière simple et pratique. Bootstrap 5 est la dernière version disponible. 
Bootstrap apporte des fonctionnalités prêtes à l’emploi basées sur JavaScript et css. 
Bootstrap est un framework mondialement utilisé par les développeurs car il permet de 
réaliser des applications web très design en un temps record. 
Le framework gère nativement l’affichage pour différents types d’écrans dont les 
smartphones. Ce mécanisme est connu sous le nom de « responsive ». En effet, chaque 
navigateur requiert potentiellement ses propres ajustements pour garantir un bon affichage 
des pages web. Le smartphone requiert par exemple beaucoup de flexibilité dans l’affichage 
des pages web et il existe de nombreuses tailles d’écran. De plus, les utilisateurs peuvent lire 
le contenu d’un site web en format portrait ou paysage. Il faut donc créer des mises en pages 
responsives. Bootstrap apporte de nombreuses bibliothèques de composants pour simplifier 
et accélérer le travail des développeurs. 
A l’issue de l’apprentissage de Bootstrap, j’ai implémenté l’affichage de la liste des chevaux à 
l’aide du contrôle « card » idéal pour afficher une vignette photo avec quelques informations. 
Toutefois, dans une application telle que celle développée durant mon stage, il a fallu trouver 
un mécanisme permettant de lier la partie graphique avec les données provenant de la base 
de données. Pour cela, j’ai utilisé un framework permettant la liaison de données ou databinding appelé Knockoutjs. 
Le site officiel de Bootstrap est : https://getbootstrap.com/ 
# Knockoutjs 
Knockoutjs est une bibliothèque JavaScript qui permet de créer des interfaces web 
responsives avec un modèle de données sous-jacent propre. A chaque modification d’une 
donnée, l'interface utilisateur qui se met à jour de manière dynamique (par exemple, en 
changeant en fonction des actions de l'utilisateur ou lorsqu'une source de données externe 
change). 
Knockoutjs est une bibliothèque JavaScript qui fonctionne avec n'importe quelle technologie 
côté serveur ou côté client. Il est possible de l’intégrer rapidement à une application web 
existante sans nécessiter de changements « architecturaux » majeurs. Knockoutjs fonctionne 
sur tous les navigateurs courants. 
J’ai donc intégré ce framework dans mes développements pour lier la couche graphie basée 
sur Bootstrap et les données. J’ai ainsi affiché une image d’un cheval avec son nom et une 
description en dessous, le tout dans une « card » Bootstrap. 
Pour cela, j’ai créé dans Microsoft Visual Studio Code un fichier html et j’ai ensuite importé 
Bootstrap et Knockoutjs dans mon fichier grâce à la commande npm (gestionnaire de 
« packages ») : 
npm i bootstrap@5.1.3 
npm i knockout@3.5.1 
J’ai ensuite pu écrire mon code en html et JavaScript. 
A ce moment, mon responsable m’a dit qu’il était préférable de modéliser les classes avec le 
langage TypeScript ce qui permet une meilleure robustesse dans le code. J’ai donc remplacé 
le code JavaScript avec une classe TypeScript (transpilé en javascript) : 
Comme avec Bootstrap et Knockoutjs, j’ai importé TypeScript grâce à npm. 
Le site officiel de Knockoutjs est : https://knockoutjs.com/ 
# Liaison de données 
Dans un souci de structuration du code, j’ai créé par la suite des espaces de nommage 
(namespace en anglais) qui permet de regrouper des classes ensemble.
Les données ont été, dans un premier temps, insérées directement dans le code.
Grâce à Knockoutjs, l’affichage d’une liste des chevaux a été relativement rapide. En effet, 
pour éviter d’écrire plusieurs fois la même commande pour afficher des chevaux, il est 
possible d’écrire le modèle graphique (template en anglais) qui sera ensuite répliqué autant 
de fois que nécessaire au moment de la liaison des données, dans notre cas, la liste des 
chevaux. 
# SQLite 
Dans la « vraie » vie des applications, les données ne sont pas saisies directement dans le code 
JavaScript mais proviennent généralement d’une base de données. 
J’ai donc modélisé une base de données pour stocker les informations relatives aux chevaux. 
La base de données utilisées est SQLite. 
SQLite est une bibliothèque écrite en langage C qui implémente un moteur de base de 
données SQL rapide, autonome, très fiable et complet. C’est l’un des moteurs de base de 
données le plus utilisé au monde qui est intégré à tous les téléphones mobiles et à la plupart 
des ordinateurs, ainsi qu'à d'innombrables autres applications que les gens utilisent tous les 
jours. 
Je me suis servi de SQLite pour pouvoir supprimer le code précédemment écrit en JavaScript 
dans le code pour les déporter dans la base. C’est bien plus avantageux car SQLite peut être 
considéré comme un simple tableau réunissant toutes les informations des chevaux. 
Le site officiel de SQLite est : https://www.sqlite.org/index.html 
## Conclusion 
Compte tenu des règles imposées pour l’écriture de ce rapport, je n’ai malheureusement pas 
pu décrire l’ensemble des briques logicielles utilisées. J’ai par exemple découvert d’autres 
langages comme Node.js et Express.js qui m’ont permis de développer des APIs web 
permettant de lire et écrire dans la base de données SQLite. 
Le stage m’a permis de découvrir ou approfondir de nombreuses technologies dont certaines 
étudiées en cours avec la mise en œuvre d’un prototype totalement fonctionnel ce qui m’a 
apporté une réelle satisfaction personnelle. 