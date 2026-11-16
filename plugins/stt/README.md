# Speech To Text

This plugin uses the Web Speech API (speech recognition). It works only in Chromium-based browsers and Safari.

The page must be served over HTTPS; set it up in `slidesk.toml`:

```toml
[slidesk]
HTTPS=true
KEY="./server.key"
CERT="./server.crt"
```

To generate the two files:

```
openssl req -new -x509 -nodes -days 365 -keyout server.key -out server.crt
```

The recognition is in French (`fr-FR`) by default. Change it with `STT_LANG` at the top of `slidesk.toml`, outside the `[slidesk]` section:

```toml
STT_LANG="en-US"
```
