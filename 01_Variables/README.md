# Variables

## Variables declaration

1. use `let` keyword.
2. use `const` keyword.
3. use `var` keyword.

`let` keyword

```javascript
let name = "Teerapat";
console.log(name); // prints "Teerapat"

let myAge = 33;
console.log(myAge); // prints "33"
```

using `let` keyword, we can update the value of variable

```javascript
let myAge = 33;
myAge = myAge + 1;
console.log(myAge); // prints "34"
```

`const` keyword (`const` stand for "constant")

```javascript
const pi = 3.14159265359;
const gravity = 9.8337;
```

using `const` keyword, we can't update the value.  

```javascript
const weight = 68;
weight + 1
// TypeError: Assignment to constant variable.
```

by conventional we'll use "camel case" for naming variables.

```javascript
let myAge = 33;
let resultWrapper = document.getElementById('result')
```
