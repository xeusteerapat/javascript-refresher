# Asynchronous Javascript

So, before we move on, we need to understand the javascript "call stack" works

## Call stack

> Call stacl is the mechanism of the Javascript interpreter uses to keep track of its place in a script that calls multiple functions. This is how JavaScript "knows" what functions are called from within that function, etc.

Stack is a data structure, think of stack of books on the desk. The last thing that you put on is going to be on the top and that will be the first thing that you remove. This is called "last in, first out".

### How call stack works

1. When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.
2. Any functions that are called by that function are added to the call stack further up, and run where their calls are reached.
3. When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.

let's see some code example:

```javascript
const multiply = (x, y) => x * y;

const square = x => multiply(x, x);

const isRightTriangle = (a, b, c) => {
  return square(a) + square(b) === square(c);
};

isRightTriangle(3, 4, 5); // true
```

Here is steps by steps of what happened in a call stack:

1. The JavaScript interpreter found the very first function call `isRightTriangle(3, 4, 5)` and added to the call stack.
2. As you can see inside the `isRightTriangle()`, there are multiple functions calls in here `square()` and added to the call stack on top of `isRightTriangle()`.
3. `square()` still not return anything either, it calls an another function `multiply()`, so then `multiply()` is added to the call stack.

here what is look like:

![call stack](call_stack.png)

So the last function `multiply()` doesn't call any other function, so it returns `3 * 3` which is `9` and when it returns a value it is remove from the stack. And then, `square(3)` return `9` so it's poped off the stack. Now, we end up with `isRightTriangle()` and javascript will do the same thing with `4` and `5`. Remember, "The last thing in is the first thing out".

here is another video explain about how call stack works in javascript.

[![Call stack ecplain](https://i.ytimg.com/vi/W8AeMrVtFLY/maxresdefault.jpg)](https://www.youtube.com/watch?v=W8AeMrVtFLY)

## JavaScript is a single thread

"Javascript is a single thread" that's mean it can do one thing at that time. A line of code is executed, then the next one is executed, and so on.

let's see some code:

```javascript
console.log('I HAPPEN FIRST!');
alert('Hi!');
console.log('I HAPPEN SECOND!');
```

as you can see, `alert('Hi')` is blocking second console.log() the code won't run until you click OK

![alert](alert.png)

And that seems like it could be a severe limitation if we do things that take time if we do things that aren't immediate we don't want to just have a user sit there waiting and have no other code running.

Another example is network requests, imagine you want to request data from database or request data from third party API. That process are take time and it might give a bad user experience to waiting our webpage response.

Here is callbacks comes in to plays.

## Asynchronous Callbacks

To solves this problem, JavaScript using "Callbacks" let's see what does it means from MDN.

> Async callbacks are functions that are specified as arguments when calling a function which will start executing code in the background. When the background code finishes running, it calls the callback function to let you know the work is done, or to let you know that something of interest has happened.

For those processes that time, we pass a callback function and those functions will be executed at the appropriate time. Remember `alert()` as above? let's change something:

```javascript
console.log('I HAPPEN FIRST');
setTimeout(() => {
  alert('HI!');
}, 1000);
console.log('I HAPPEN SECOND!');
```

![setTimeout](setTimeout.gif)

and this time, you will see `I HAPPEN FIRST` then `I HAPPEN SECOND` and `alert('HI!')`. because we've pass `alert('HI!')` into `setTimeout()` function.

As you can see, `setTimeout()` function takes 2 arguments, first is a callback function second is a delay time. When we pass a callback function as an argument to `setTimeout()` function, the callback function is not executed immediately. It is “called back” (hence the name) asynchronously somewhere inside the `setTimeout()` function’s body. The containing function is responsible for executing the callback function when the time comes (after 1 second delay).

Why does this work? It seems like it shouldn't look nothing different is really happening except we're passing in some function to be called later. How can javascript keep track of 1 second and remember to do this or call this function while also moving to another `console.log('I HAPPEN SECOND')`

The trick here is **"the browser does the work".** JavaScript is not the same as the browser. JavaScript is a language that is implemented in your browser. Those browser usually written in C++ and it capable of doing certain tasks that JavaScript sucks or take time. And when it's done, it reminds JavaScript Hey, your turn again.

To summarize:

- Browser come with "Web APIs" that are able to handle certain tasks in the background (like making requests or setTimeout)
- The JavaScript call stack recognizes these Web APIs functions and passes them off to the browser to take care of.
- Once the browser finishes those tasks, they return and are pushed onto the stack as a "Callback".

I recommended you to watch this awesome video about how asynchronous javascript actually works behind the scenes. Also play around with this [tools](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)

[![What the heck is event loop](https://i.ytimg.com/vi/8aGhZQkoFbQ/maxresdefault.jpg)](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

## Welcome to Callback Hell
