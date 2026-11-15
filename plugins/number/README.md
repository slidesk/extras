# Plugin `number`

Displays the number of the current slide in the bottom right corner.

Change its format with `PLUGIN_NUMBER_FORMAT` at the top of `slidesk.toml`, outside the `[slidesk]` section:

```toml
PLUGIN_NUMBER_FORMAT="%n/%t"
```

`%n` is replaced with the number of the current slide and `%t` with the number of slides.
