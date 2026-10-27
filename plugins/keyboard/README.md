# SliDesk Plugin: keyboard

This plugin allows you to control the navigation with a keyboard.

SliDesk already binds the arrows, Page Up / Page Down, Space, Home / End, `b` / `.` (black screen) and `f` (fullscreen). A key in your `keyboard.json` takes over the SliDesk binding of that key.

You can override it with a `keyboard.json` file in the root directory of the presentation.

Example:

```json
{
  "a": "next",
  "b": "previous",
  "c": "previous"
}
```

Keys correspond to the keyboard's key and values correspond to action ("next", "previous", "fullscreen", ...).

Example: This my configuration to use with a 8BitDo Micro:

```json
{
	"k": "next",
	",": "previous",
	"c": "next",
	"d": "previous",
	"j": "webcam"
}
```
