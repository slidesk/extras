# Shiki

Highlights the code blocks with [Shiki](https://shiki.style).

[WARNING] Shiki is fetched from esm.sh: this plugin works only online.

A block in a language Shiki does not know (`math`, …) is left as it is. Do not install it with the `highlightjs` plugin.

Change the theme with `SHIKI_THEME` at the top of `slidesk.toml`, outside the `[slidesk]` section (`min-light` by default):

```toml
SHIKI_THEME="nord"
```
