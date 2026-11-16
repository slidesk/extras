# SliDesk Plugin: AutoNext

This plugin moves to the next slide automatically after a delay.

Add a class prefixed with `auto-` on the slide, followed by the delay in milliseconds:

```
## My slide .[auto-1312]

This slide goes to the next one after 1312 ms, plus the transition (`TRANSITION` in `slidesk.toml`, 300 ms by default): 1612 ms.
```

In the speaker view, the current slide is covered with `TIMER` while it is on such a slide. Leaving the slide earlier cancels its timer.
