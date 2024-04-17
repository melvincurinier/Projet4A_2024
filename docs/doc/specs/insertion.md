# Insertion
## Introduction
Un utilisateur connecté peut ajouter un résultat en base de données. Ce résultat pourra ensuite être chargé plus facilement via la [visualisation automatique](doc/specs/visualisation?id=visualisation-automatique).

## Insertion manuelle
Les utilisateurs peuvent insérer en base de données un résultat de manière manuelle. Pour ce faire, ils doivent renseigner tous les paramètres du résultat (position GPS, période, granularité...) grâce à un formulaire puis charger les fichiers `Grid` et `Color` correspondants. Une fois le formulaire rempli, le front-end se charge de lire les fichiers transmis et de faire une requête à l'API pour ajouter l'entrée en base de données.

## Insertion automatique
Les utilisateurs peuvent insérer en base de données un résultat de manière automatique. Le fonctionnement est sensiblement identique au paragraphe précédent. La différence se situe au chargement des paramètres du résultat qui se fait de manière autonome. L'utilisateur doit à la place renseigner un séparateur (par ex : `_`) ; l'application lira ensuite les paramètres dans le nom du fichier `Grid`. Une fois le formulaire rempli, le front-end se charge de lire les fichiers transmis et de faire une requête à l'API pour ajouter l'entrée en base de données.

## Requête API
Dans les deux cas, la requête à l'API est la suivante :

| **Endpoint**  | **Méthode** |**Succès**         | **Erreur**                       |
|---------------|-------------|-------------------|----------------------------------|
| `/insertFiles`| POST        |`{success:RESULT}` | `{success:false, error: ERROR }` |

Le loadout de la requête est le suivant :
```json
{ 
    "data": "<data>",
    "token": "<token>"
}
```
