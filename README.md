# Methods To My Madness

Reimplement each of these array/string methods to learn how the built-in ones actually work!


### A Good Approach

Each of these is a fair challenge. Take your time, return to them when you have time for another dive into it, and if you're stuck on one, try a different one!


### This Is Not a Method

These functions are NOT quite the same as the original. The main difference is that they're functions, not methods.

Here's an example:

```javascript
// How the built-in array methods are used:
const arr = [5, 3, 8];
const valueLookedFor = 3;
arr.includes(valueLookedFor); // -> true;

// How your function is supposed to work:
const arr = [5, 3, 8];
const valueLookedFor = 3;
includes(arr, valueLookedFor); // -> true;
```

Methods don't need that extra parameter, as they can look at `this`, the original object. Functions don't have a `this` (or, they do, but... well, look it up if you want to!), so they need to take the array or string in as a parameter.

If you want to translate from the built-in method to our function, just move the thing to the left of the dot into the parens. And vice versa!
