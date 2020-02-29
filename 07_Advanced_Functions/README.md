# Advanced Functions

In this section, we'll get deep dive into details about function. The topic I'd like to cover is:

- Scopes
- Higher oder functions
- Callback function

## Function scope

"Variable visiblity" the location where a variable is defined.

> The idea that depending on how you define a variable other piece of code may or may not access to the variable.

```javascript
function helpMe() {
  let msg = "I'm on fire!, please help!!!";
  msg; // => "I'm on fire!, please help!!!"
}

helpMe(); // even we execute this function
msg; // undefined, because it located outside function scope.
```

how about same variable name but different scope?

```javascript
function getPersonInfo1() {
  const name = 'Teerapat';
  const age = 33;
  console.log(age);
}

function getPersonInfo2() {
  const name = 'Mesut';
  const age = 31;
  console.log(age);
}

getPersonInfo1(); // 33
getPersonInfo2(); // 31
// they are visible only their scope of the given function
```

## Block scope

as we've seen before in [variable](https://github.com/xeusteerapat/javascript-refresher/tree/master/01_Variables#scoping-rules) so I'll remind again in this section

```javascript
function doubleArr(arr) {
  const result = [];
  for (let num of arr) {
    let double = num * 2;
    result.push(double);
  }
  console.log(double); // Error, double is not define in function scope. It blocked by for-loop scope
  return result; // we still can access this variable because it located inside function scope.
}
```

## Lexical scope

this concept often used in nested functions

```javascript
function outer() {
  let movie = 'inception';

  function inner() {
    console.log(movie.toUpperCase());
  }
  inner();
}

outer(); // we'll get INCEPTION
// that's mean we can access movie inside inner function
```

here how it works

1. first `inner` is looking for `movie` inside its scope.
2. if it's not found, it will look for `movie` inside parent scope.
3. if it still not found, it will continue looking in the global scope.

what if we've declared `movie` inside `inner`

```javascript
function outer() {
  let movie = 'inception';

  function inner() {
    let movie = 'the dark knight';
    console.log(movie.toUpperCase());
  }
  inner();
}

outer(); // we'll get THE DARK KNIGHT instead because inner always looks for `movie` inside its scope first, if it not found, it will continue looking in the upper scope
```

## Function expression

we store function in variable and this is something looks like this:

```javascript
const funcName = function(a) {
  return a ** 2;
};

// we can call just like this
funcName(4); // 16
```

it works the same way as function statement, but remember you need to declare to variable before calling it.

## Higher order functions

Function that operate on/with other function.

- Assigned as a value to a variable.
- Passed as an argument to other functions.
- Returned by another function.

### Assign function to a variable

```javascript
const add = function(x, y) {
  return x + y;
};

const sub = function(x, y) {
  return x - y;
};

const mul = function(x, y) {
  return x * y;
};

const div = function(x, y) {
  return x / y;
};

// we can add all of them into array

const opertions = [add, sub, mul, div];

// we can loop over opertions
for (let func of opertions) {
  let result = func(5, 6);
  console.log(result);
}

/*
11
-1
30
0.8333333333333334
*/

// or even store them in an object
const mathOps = {
  addition: add,
  subtraction: sub,
  multiplication: mul,
  division: div
};

const addResult = mathOps.addition(4, 7);
console.log(addResult); // 11, congrat! you created the first method!
```

### Except other function as arguments

```javascript
function callTriple(func) {
  // except func as argument
  func();
  func();
  func();
}

function laugh() {
  console.log('LOLOLOLOLOLOLOLOLOL');
}

// then pass laugh to callTriple
callTriple(laugh);
/*
LOLOLOLOLOLOLOLOLOL
LOLOLOLOLOLOLOLOLOL
LOLOLOLOLOLOLOLOLOL
*/
```

how'bout execute N times

```javascript
function repeatNTimes(func, num) {
  for (let i = 0; i < num; i++) {
    func();
  }
}

repeatNTimes(laugh, 7);
/*
LOLOLOLOLOLOLOLOLOL
LOLOLOLOLOLOLOLOLOL
LOLOLOLOLOLOLOLOLOL
LOLOLOLOLOLOLOLOLOL
LOLOLOLOLOLOLOLOLOL
LOLOLOLOLOLOLOLOLOL
LOLOLOLOLOLOLOLOLOL
*/
```

### Function as return value

we can consider function that returns a another function is a factory function.

```javascript
function multiplyBy(num) {
  return function(x) {
    return x * num;
  };
}

// how we can use this
const double = multiplyBy(2);
double(6); // returns 12

const triple = multiplyBy(3);
triple(5); // returns 15

const halve = multiplyBy(0.5);
halve(7); // returns 3.5
```

let's break down `double` function

```javascript
// if log double variable in the console, we'll get:
ƒ(x) {
    return x * num;
}
```

that's mean we can execute it and pass the value of `x`

```javascript
double(6); // 12
```

another example

```javascript
function makeBetweenFunc(x, y) {
  return function(num) {
    return num >= x && num <= y;
  };
}

const isChild = makeBetweenFunc(0, 18);
isChild(17); // true
isChild(67); // false

const isNiceWeather = makeBetweenFunc(20, 28);
isNineties(25); // true
isNineties(36); // false
```

## Callback function

A callback function is a function passed into another function as an agument, which is then executed inside the outer function. remember `callTriple` function

```javascript
function callTriple(func) {
  func();
  func();
  func();
}

function laugh() {
  console.log('LOLOLOLOLOLOLOLOLOL');
}

callTriple(laugh); // laugh is a callback function.
```

ie. `laugh` function that execute after user clicks on the page.

```javascript
const btn = document.querySelector('button');
btn.addEventListener('click', laugh); // after user clicks button you'll see LOLOLOLOLOLOLOLOLOL in the console.
```

or just add anonymous function

```javascript
const btn = document.querySelector('button');
btn.addEventListener('click', function() {
  console.log('WHY DID YOU CLICK ME?');
});
```
