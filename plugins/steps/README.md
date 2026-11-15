# SliDesk Plugin: steps

This plugin overrides the `next()` function of SliDesk so that a list appears item by item.

Add the class `steps` on the slides which contain a list:

```md
## My list .[steps]

- first
- second
- third
```

`next` shows the items one by one, then goes to the next slide. Coming back to the slide, or jumping to it, shows every item. The speaker view follows the items.

The fade of each item lasts as long as the slide transition; change it in the CSS of your theme:

```css
:root {
  --animationSteps: 100ms;
}
```

To show something else than a list step by step, use the [sbs](../sbs/README.md) plugin.
