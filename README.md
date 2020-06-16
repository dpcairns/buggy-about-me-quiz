### Note: these bugs weren't in the original student submission. I introduced these bugs for this assignment.

# Bugs

1) The `isYes` function is never successfully loaded into `app.js`
1) The `isYes` function is broken, even when it is succesfully loaded into `app.js`
1) There is a lot wrong with the DOM fetching logic in `app.js`
1) The `scoreStyle` function breaks when trying to set the color or background color

## Debugging starting points

1) Open the javascript console in Chrome and follow the bouncing ball
1) Look for and examine red squiggles in VSCode, starting from top
1) Drop console logs/breakpoints in your code to see 
        - a) how far your code gets before it breaks
        - b) the value of your variables
                
        - What do you expect the variable values to be? 
        - Why do you expect it to be that way? Where do you make that happen?
        - Is the value what you expected? 
        - If not, why not? 
        - What would you have to change to make the actual value match your expectations?


## Most common JS error:

`Cannot read property 'type' of undefined (app.js:34)`
`
 
1) Go look for `.type` on line 34 in app.js
2) Look to the left of `.type`
3) Figure out why the thing to the left of `.type` is undefined
