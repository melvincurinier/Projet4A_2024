# Fichiers générés
## Introduction
Les fichiers générés contiennent toutes les informations permettant l'affichage des résultats obtenus sur la carte. Ils contiennent des coordonnées et les types des résultats (permettant de connaitre la couleur à afficher). Ces fichiers sont générés via des scripts `bash` exécutant un fichier `jar`. Aucune documentation sur la génération des fichiers n'a été trouvée à la reprise du projet en 2021.

Des fichiers permettant de tester l'application sont contenus dans le dossier `/test_files`.

## Grid
Un fichier `Grid` possède des lignes contenant les différentes informations d'affichage de chaque carré à afficher. Chaque ligne est au format suivant :
```
<id>|<coord:1>|<coord:2>|<coord:3>|<coord:4>|
```

Les `<coord>` sont au fomat `<lat>,<lon>`. Ils représentent les extrémités de chacun des carrés.
L'`<id>` est unique et est également référencé dans les fichiers `Color` (voir ci-dessous).

## Color

Un fichier `Color` possède des lignes contenant les couleurs des carrés à afficher. Chaque ligne est au format suivant :
``` 
<id> - <color>
```

Les différentes couleurs disponibles sont :
<table><thead>
<tr><th>Nom de la couleur</th><th>Signification</th><th>Couleur</th></tr>
</thead>
<tbody>
<tr><td>EMERGING</td><td>Le trafic augmente</td><td><div style="width:20px; height: 20px; background: #149718"></div></td></tr>
<tr><td>DECREASING</td><td>Le trafic diminue</td><td><div style="width:20px; height: 20px; background: #b12e11"></div></td></tr>
<tr><td>LATENT</td><td></td><td><div style="width:20px; height: 20px; background: #0c41e2"></div></td></tr>
<tr><td>JUMPING</td><td></td><td><div style="width:20px; height: 20px; background: #3d3d2a"></div></td></tr>
<tr><td>LOST</td><td>La donnée n'est plus disponible</td><td><div style="width:20px; height: 20px; background: #fffd38"></div></td></tr>
<tr><td>DEFAULT</td><td>Couleur par défaut</td><td><div style="width:20px; height: 20px; background: #f24be5"></div></td></tr>
</tbody>
</table>