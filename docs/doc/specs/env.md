# Environnement
## Architecture

L'application est axée autour de trois services : le serveur API (en NodeJS / Express), l'interface utilisateur (en Angular) et la base de données (MongoDB). 

![Architecture](../../_media/arch.png ':size=50%')

|        **Service**        |    **Port**   |
|:-------------------------:|:-------------:|
|       Backend (node)      |      8080     |
|     Frontend (angular)    |      4200     |
|     Frontend (docker)     |      80       |
| Base de données (mongodb) | Service cloud |

## Environnement logiciel
### API
| **Nom du logiciel** | **Version** | **Description**                                 |
|---------------------|-------------|-------------------------------------------------|
| Node                | 14.18.0     | Serveur web                                     |
| Body Parser         | 1.18.3      | Parsing du corps des requêtes                   |
| Express             | 4.16.4      | Gestion des routes et services web              |
| GridFS-Stream       | 1.1.1       | Permet de lire des fichiers GridFS depuis Mongo |
| JsonWebToken        | 8.4.0       | Gestion des tokens JWT                          |
| Mongoose            | 5.4.3       | Gestion de la connexion à MongoDB               |
| ShellJS             | 0.8.3       | Utilisation de commandes Shell en JS            |
| UUID                | 8.3.2       | Génération d'identifiants utilisateurs uniques  |

### Frontend
| **Nom du logiciel** | **Version** | **Description**     |
|---------------------|-------------|---------------------|
| @angular            | 12.2.0      | Angular             |
| Leaflet             | 1.7.1       | API de cartographie |
| RXJS                | 6.6.0       | Observables         |
| TsLib               | 2.3.0       | TypeScript helpers  |