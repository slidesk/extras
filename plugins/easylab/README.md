# SliDesk Plugin: easylab

Sends instructions to the students of an [EasyLab](https://docs.easylab.yodamad.fr) lab while you present: they show in their workspace, as messages of the instructor.

Write them in the speaker notes of a slide, one per line:

```
/*
easylab: Exercise 2: add a test for the login page
*/
```

When the speaker view reaches the slide, each `easylab:` line is sent once, and the speaker view tells whether EasyLab got it. A message stays up for an hour.

Give the address of EasyLab, the id of the lab and its admin password where you run `slidesk present`, in the environment or a `.env` file:

```
EASYLAB_URL=https://easylab.example.com
EASYLAB_LAB=my-lab
EASYLAB_PASSWORD=...
```

The password stays on your machine: only the speaker view sends messages, never a page of the audience. Signing in to EasyLab with Azure AD only is not supported.
