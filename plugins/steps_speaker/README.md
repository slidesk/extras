# Steps Speaker

A Slidesk plugin that adds step-by-step navigation through speaker notes sections.

When speaker notes contain `<hr>` separators, each section becomes a navigable step. Arrow keys cycle through steps within the current slide:

- **ArrowRight** — advances to the next step. On the last step, sends `next` to navigate to the following slide.
- **ArrowLeft** — goes back to the previous step. On the first step, sends `previous` to navigate to the preceding slide.

The plugin registers its keydown listener in the **capture phase** and calls `stopPropagation()` to prevent the default Slidesk handler from also firing, avoiding duplicate navigation commands.

## Usage

Include `steps_speaker.js` in the speaker notes page after the main Slidesk script. Call `window.slidesk.stepsSpeaker()` to initialise step parsing for the current notes content.
