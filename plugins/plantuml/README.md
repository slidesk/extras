# Plugin `plantuml`

Renders [PlantUML](https://plantuml.com) diagrams in the browser, with the PlantUML jar run by [CheerpJ](https://cheerpj.com).

Write the diagram in an element with the `plantuml` class:

```html
<pre class="plantuml">
@startuml
Alice -> Bob: Hello
@enduml
</pre>
```

[WARNING] the CheerpJ 2.3 loader is fetched from its CDN: this plugin works only online, and CheerpJ 2 is superseded by CheerpJ 3.
