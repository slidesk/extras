# SliDesk Plugin: gamepad

This plugin lets you control the navigation with a gamepad (the first one connected).

By default, the left / right of the D-pad go to the previous / next slide, and so do the triggers (6: next, 7: previous).

You can override it with a `gamepad.json` file at the root of the talk:

```json
{
  "1": "next",
  "3": "previous",
  "4": "previous"
}
```

Keys are the numbers of the buttons ([standard mapping](https://w3c.github.io/gamepad/#remapping)), values are actions of `window.slidesk` (`next`, `previous`, `first`, `last`, `black`…). An action the presentation does not have, like `notes_down`, is sent to the speaker view.
