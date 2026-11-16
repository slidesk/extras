# Template: FourParts

This template follows this structure:

```
## Title of the slide .[#four-parts]

[[one]]

First part

[[/one]]

and the rest of the content

[[two]]

Second part

[[/two]]

[[three]]

Third part

[[/three]]


[[four]]

Fourth part

[[/four]]

and it can continue here
```

And will render the slide like this:

```
            Title of the slide

First part  |  Second part  |  Third part | Fourth part

               and the rest of the content
            and it can continue here
```

You can specify Top & Bottom parts too

```
## Title of the slide .[#four-parts]

[[top]]

Content on top

[[/top]]

[[one]]

First part

[[/one]]

[[two]]

Second part

[[/two]]

[[three]]

Third part

[[/three]]

[[four]]

Fourth part

[[/four]]


[[bottom]]

Content on bottom

[[/bottom]]

and it can continue here
```

And will render the slide like this:

```
            Title of the slide

              Content on top

First part  |  Second part  |  Third part | Fourth part

              Content on bottom
              
            and it can continue here
```
