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
  const name = "Teerapat";
  const age = 33;
  console.log(age);
}

function getPersonInfo2() {
  const name = "Mesut";
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
  let movie = "inception";

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
  let movie = "inception";

  function inner() {
    let movie = "the dark knight";
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
