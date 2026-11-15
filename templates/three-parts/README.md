# Template: ThreeParts

This template follows this structure:

```
## Title of the slide .[#three-parts]

[[one]]

Left part

[[/one]]

and the rest of then content

[[two]]

Middle part

[[/two]]

[[three]]

Right part

[[/three]]

and it can continue here
```

And will render the slide like this:

```
        Title of the slide

Left part  |  Middle part  |  Right part

         and rest of content
       and it can continue here
```

You can specify Top & Bottom parts too

```
## Title of the slide .[#three-parts]

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

[[bottom]]

Content on bottom

[[/bottom]]

and it can continue here
```

And will render the slide like this:

```
            Title of the slide

              Content on top

First part  |  Second part  |  Third part

              Content on bottom
              
            and it can continue here
```
