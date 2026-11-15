# Theme default

Thème de base, sur les couleurs par défaut de SliDesk.

Seul `default.css` est chargé quand le dossier est dans `themes/` d'un talk. Il ajoute des classes à poser sur les slides :

- `.[split]` avec un `<div class="content">` qui contient des `<div>` : contenu en colonnes (largeurs libres avec `style="width: 75%"`) ;
- `.[title-top]` : titre en haut de la slide ;
- `.[text-left]` : texte aligné à gauche.

Les fichiers `.sdf` sont un talk d'exemple qui montre ces classes : copiez-les dans un talk (avec `default.css`, chargé par `add_styles: default.css` dans `main.sdf`) pour les voir. Ils ne sont pas lus depuis `themes/`.
