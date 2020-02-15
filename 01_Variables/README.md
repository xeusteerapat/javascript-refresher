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

## Scoping rules

from [let keyword mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) scoping rules which is different with `var`

> Variables declared by let have their scope in the block for which they are defined, as well as in any contained sub-blocks.  

for example

```javascript
function varTest() {
  var x = 1;
  {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
```

## Data Types

1. Primitive Types
2. Object Types

## Primitive Types

1. Numbers
2. String
3. Boolean
4. Null
5. Undefined

### Numbers

The number type in javascript are represents both integer and floating point. Even `Infinity` and `NaN` (Not a Number)

```javascript
let myMoney = 100;
let height = 173.5;
console.log(1 / 0) // Infinity
console.log(0 / 0) // NaN
```

you can check data by using `typeof` keyword.

```javascript
typeof myMoney // "number"
typeof height // "number"
typeof Infinity // "number"
typeof NaN // "number"
```

`NaN` stands for "Not a Number" but `typeof NaN` is `"number"` Hmmmmmmmmmmm.

### String

A sequence of characters wrap in quotes. Either single of double.

```javascript
let address = "123 st. downtown";
const firstname = 'Teerapat';
```

### Boolean

A logical types has only two values `true` and `false`.

```javascript
let isChild = true;
const isChecked = false;
```

### Null

The value `null` represents the intentional absence of any object value.  

> It’s just a special value which represents “nothing”, “empty” or “value unknown”.

```javascript
let myBox = null;
```

### Undefined

The meaning of `undefined` is “value is not assigned”.  Also variable is declared but not assigned yet, then its value is `undefined`

```javascript
let a = undefined;

let b;
console.log(b); // undefined
```

### The different between `null` and `undefined`

```javascript
typeof null; // object (for legacy reasons)
typeof undefined; // undefined

// also you can check
null === undefined // false
```
