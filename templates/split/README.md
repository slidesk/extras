# Template: Split

This template follows this structure:

```
## Title of the slide .[#split]

[[left]]

Left part

[[/left]]


and the rest of the content


[[right]]

Right part

[[/right]]

and it can continue here
```

And will render the slide like this:

```
        Title of the slide

Left part         |  Right part
        
          and the rest of the content
        and it can continue here
```

You can specify Top & Bottom parts too

```
## Title of the slide .[#split]

[[top]]

Content on top

[[/top]]

[[left]]

Left part

[[/left]]

[[right]]

Right part

[[/right]]

[[bottom]]

Content on bottom

[[/bottom]]

and it can continue here
```

And will render the slide like this:

```
        Title of the slide

          Content on top

Left part         |  Right part

         Content on bottom

     and it can continue here
```
