# Pré-requis

## Cas général
Il est nécessaire d'installer en amont :
* [Docker](https://www.docker.com/) ;
* [NodeJS](https://nodejs.org/en/download/)

Une fois ces logiciels installés, merci d'exécuter ces commandes afin d'installer les modules nécessaires :
```
cd front && npm install
cd ../server && npm install
```

## Base de données
Nous utilisons MongoDB comme serveur de base de données. Pour des raisons pratiques, nous avons décidé d'utiliser un serveur cloud (afin de partager plus facilement les informations de celle-ci d'une machine à une autre). 

Pour faire de même, il vous suffira de créer un compte sur [MongoDB Cloud](https://cloud.mongodb.com/) et de créer un projet. Vous pourrez ensuite dans la section `Databases` récupérer les informations de connexion à votre cluster en cliquant sur le bouton `Connect` puis `Connect your application`. Vous trouverez ensuite l'URL de connexion à remplacer dans la variable d'environnement `MONGO_URL` du fichier `docker-compose.yml`.

## Mode développeur
Pour pouvoir modifier le projet, il est nécessaire d'installer en supplément :
* [CLI d'Angular](https://angular.io/cli)

