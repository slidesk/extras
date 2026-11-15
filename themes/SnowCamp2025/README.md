# Theme SnowCamp2025

Ce thème peut être utilisé pour la conférence https://snowcamp.io (édition 2025).

Il utilise les codes couleurs de l'évènement.

Seul `default.css` est chargé quand le dossier est dans `themes/` d'un talk. Il ajoute des classes à poser sur les slides :

- `.[split]` avec un `<div class="content">` qui contient des `<div>` : contenu en colonnes (largeurs libres avec `style="width: 75%"`) ;
- `.[title-top]` : titre en haut de la slide ;
- `.[text-left]` : texte aligné à gauche.
- `.[cover]` : slide de couverture, avec l'illustration de l'évènement ;
- `<div class="speaker">` dans un `<div class="content">` : présentation des speakers, voir `speakers.sdf` et `speaker-single.sdf`.

`sponsors.sdf` utilise des classes (`sponsors-logos`, `flocon`, `superposed`) qui n'ont pas encore de CSS.

Les fichiers `.sdf` sont un talk d'exemple qui montre ces classes : copiez-les dans un talk (avec `default.css`, chargé par `add_styles: default.css` dans `main.sdf`) pour les voir. Ils ne sont pas lus depuis `themes/`.
