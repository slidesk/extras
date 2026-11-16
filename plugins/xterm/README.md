# Plugin `xterm`

Add a `<div class="xterm"></div>` in your slide to open a terminal on it, running a shell on the machine of the speaker.

Since slidesk@2.7.8

Needs the `unbuffer` command line tool (on macOS, install it with `brew install expect`).

You can specify a start command with the `data-cmd` attribute.

```html
<div class="xterm" data-cmd="ls -l"></div>
```

Only the speaker can type in it: a page opened on the speaker's machine, or with the token of the speaker view. The audience sees the output.

The [console](../console/README.md) plugin opens the same shell in a drop-down terminal.
