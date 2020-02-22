# Functions

Functions are the main “building blocks” of the program that allow us to reuse the code to be called many times.

> Functions allow us to write reuseable, modular code. We define a "chunk" of code that we can then execute at a later point.

## Function declaration

or functions statement it look like this

```javascript
function funcName() {
  // do something
}

// execute the function
funcName();

function greeting() {
  console.log("Hello");
}

greeting(); // Hello
```

## Function arguments

instead empty parentheses, we can add some variables inside like this

```javascript
function greeting(name) {
  console.log(`Hello, ${name}.`);
}

greeting("Teerapat"); // Hello, Teerapat
```

and we also can have multiple arguments, but when we pass it to the function, we need to pass to right order.

```javascript
function divide(a, b) {
  console.log(a / b);
}

divide(10, 20); // a = 10, b = 20
```

## The return statement

Function can return a value back after function has been executed by using `return` keyword and also can capture to the variable.

```javascript
function sum(a, b) {
  return a + b;
}

const result = sum(4, 5); // return value is 9
```

this is different from logging value in the console

```javascript
function sum2(a, b) {
  console.log(a + b);
}

const result2 = sum2(4, 5); // then if we check value of result2 is "undefined"
```

one thing to remember is that code after return statement will not run.

```javascript
function square(x) {
  return x * x;
  consol.log("all done!"); // will not print
}

square(4); // 16
```

sometimes we might write function with a condition, we can return boolean like this

```javascript
function isPurple(color) {
  if (color.toLowerCase() == "purple") {
    return true;
  } else {
    return false;
  }
}
```

in this case, we can have 2 return statements but it will check condition first. if `true` the return statement below will not run. And we can write even shorter by removing `else` statement like so.

```javascript
function isPurple(color) {
  if (color.toLowerCase() == "purple") {
    return true;
  }
  return false; // if it true, this line will not execute
}
```

even better, we can simply return the boolean expression like this:

```javascript
function isPurple(color) {
  return color.toLowerCase() == "purple";
}
```
