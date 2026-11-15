# SliDesk Plugin: keyboard

This plugin lets you bind keys to actions, in the presentation and in the speaker view.

SliDesk already binds the arrows, Page Up / Page Down, Space, Home / End, `b` / `.` (black screen) and `f` (fullscreen). A key in your `keyboard.json` takes over the SliDesk binding of that key; without `keyboard.json`, the plugin binds `f` to fullscreen.

Put a `keyboard.json` file at the root of the talk:

```json
{
  "a": "next",
  "b": "previous",
  "c": "previous"
}
```

Keys are the [`key`](https://developer.mozilla.org/docs/Web/API/KeyboardEvent/key) of the keyboard event, values are actions of `window.slidesk` (`next`, `previous`, `fullscreen`…). An action the view does not have is sent to the other view: `notes_down` pressed in the presentation scrolls the notes of the speaker view, `next` pressed in the speaker view moves the presentation. `fullscreen` is never sent, the browser only allows it from a key pressed on that page.

When the action `X` exists, `XDown` and `XUp` run too, if they exist, when the key is pressed and released: the [spotlight](../spotlight/README.md) plugin uses them.

Keys are left alone while you type in a field or press Cmd / Ctrl / Alt.

My configuration, for a 8BitDo Micro:

```json
{
  "k": "next",
  ",": "previous",
  "c": "next",
  "d": "previous",
  "j": "webcam"
}
```
