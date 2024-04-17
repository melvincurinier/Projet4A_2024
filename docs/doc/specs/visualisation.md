# Visualisation 

## Introduction

Ce cas d'usage permet d'afficher sur une carte les résultats de l'analyse de trajectoires dans le but d'en faciliter la lecture. Cette étape affiche ainsi une matrice de carrés (le coté du carré peut être défini). Ces carrés seront [colorés](/doc/ref/files?id=color) en fonction du résultat de l'analyse.

Aussi, il est possible de cliquer sur un carré pour ouvrir une pop-up contenant quelques informations complémentaires (position GPS, signification de la couleur).

Dans un cas particulier (avec direction), il est possible d'ajouter aux carrés une ou plusieurs flèches indiquant l'évolution du trafic dans une ou plusieurs direction(s).


## Visualisation manuelle

Les utilisateurs peuvent visualiser les résultats de manière manuelle sur la carte. Pour se faire, ils doivent renseigner la latitude et la longitude centrale, un fichier [Color](/doc/ref/files?id=color) et un fichier [Grid](/doc/ref/files?id=grid).


## Visualisation automatique

Les utilisateurs peuvent charger depuis la base de données et visualiser les résultats de manière automatique sur la carte. Pour se faire, ils doivent choisir dans une arborescence les différents paramètres proposés.

Les paramètres sont récupérés grâce à une requête à l'API :

| **Endpoint**  | **Méthode** |**Succès**         |
|---------------|-------------|-------------------|
| `/getCities`  | POST        |`{cities:CITIES}`  |

Le loadout de la requête est le suivant :
```json
{ 
    "token": "<token>"
}
```

Nous affichons ensuite le premier paramètre, puis à chaque nouveau choix, nous filtrons les choix suivants par rapport à ceux déjà faits.

## Affichage sur la carte
Dans les deux cas précédents, en envoyant le formulaire, le front-end se charge de transmettre au composant de la carte les différentes données via le service de partage, grâce à cette ligne :
```js
self.sharedService.nextMessage({lat: f.value.lat, lon: f.value.lon, grid: gridLines, color: colorLines});
```

Le composant de la carte gère ensuite de l'affichage (voir fonctionnement dans [Map](/doc/ref/map)).