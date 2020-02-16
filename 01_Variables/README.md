# Variables and Data types

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
weight + 1;
// TypeError: Assignment to constant variable.
```

by conventional we'll use "camel case" for naming variables.

```javascript
let myAge = 33;
let resultWrapper = document.getElementById("result");
```

## Scoping rules

from [let keyword mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) scoping rules which is different with `var`

> Variables declared by let have their scope in the block for which they are defined, as well as in any contained sub-blocks.

for example from MDN

```javascript
function varTest() {
  var x = 1;

  // different scope
  {
    var x = 2; // same variable!
    console.log(x); // 2
  }
  console.log(x); // 2
}

function letTest() {
  let x = 1;

  // different scope
  {
    let x = 2; // different variable
    console.log(x); // 2
  }
  console.log(x); // 1
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
console.log(1 / 0); // Infinity
console.log(0 / 0); // NaN
```

you can check data by using `typeof` keyword.

```javascript
typeof myMoney; // "number"
typeof height; // "number"
typeof Infinity; // "number"
typeof NaN; // "number"
```

`NaN` stands for "Not a Number" but `typeof NaN` is `"number"` Hmmmmmmmmmmm.

### String

A sequence of characters wrap in quotes. Either single of double.

```javascript
let address = "123 st. downtown";
const firstname = "Teerapat";
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

The meaning of `undefined` is “value is not assigned”. Also variable is declared but not assigned yet, then its value is `undefined`

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
null === undefined; // false
```

## Operators

Addition `+`  
Subtraction `-`  
Multiplication `*`  
Division `/`  
Assigment `=`

```javascript
2 + 3; // 5
3 - 1; // 2
4 * 6; // 24
22 / 7; // 3.142857142857143
```

if we use `+` with strings, then it concatenates them together.

```javascript
let firstname = "Teerapat";
let lastname = "Prommarak";
let fullname = firstname + " " + lastname; // Teerapat Prommarak
```

if we use `+` with strings and number, then it also concatenates them together.

```javascript
1 + "2"; // "12"
```

### Shortened assigned

```javascript
let num = 1;
num += 2; // equal num = num + 2
```

### Other operators

Remainder `%`  
Power `**`

```javascript
10 % 3; // 1
2 ** 3; // 8
```

### Operator precedence

```javascript
3 + 4 / 5; // 3.8 (just like 3 + (4 / 5))
9 * 2 - 7; // 11
```

[see more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

### Increment and Decrement

```javascript
let count = 10;
count++;
consol.log(count); // 11

let num = 12;
num--; // 11
consol.log(num); // 11
```

### Logical operators

AND `&&`  
OR `||`  
NOT `!`

```javascript
true && true; // true
true && false; // false
false && false; // false

true || true; // true
true || false; // true
false || false; // false

!true; // false
!null; // false
!(3 <= 4); // false
```

## Types Conversion

### Numeric conversion

```javascript
let num = "123"; // 123 as string
let realNum = Number(num); // 123 as number
```

### String conversion

```javascript
let isCorrect = true; // boolean
let isCorrectString = String(isCorrect); // "true" as string
```

### Boolean conversion

```javascript
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false

console.log(Boolean("hi")); // true
console.log(Boolean("") ; // false
```

## String Methods

### String Indices

string are indexed, each character has a corresponding index.

| s   | t   | r   | i   | n   | g   |
| --- | --- | --- | --- | --- | --- |
| 0   | 1   | 2   | 3   | 4   | 5   |

use `str.length`

```javascript
let myFavSong = "My Stupid Mouth";
myFavSong.length; // 16, spaces include.
```

### Accessing characters

```javascript
myFavsong[0]; // M
myFavsong[2]; // ' ' space
myFavsong[myFavSong.lenght - 1]; // h , last character
```

### Strings are immutable

which means, you cannot change it.

```javascript
let myFavSong = "My Stupid Mouth";
myFavSong[0] = "D";
console.log(myFavSong); // still "My Stupid Mouth"
```

### Uppercase and Lowercase

```javascript
let myFavSong = "My Stupid Mouth";
myFavSong.toUpperCase(); // 'MY STUPID Mouth'
myFavSong.toLowerCase(); // 'my stupid Mouth'
```

### Getting a substring

use `str.slice(start, [end])` end is **exclusive**

```javascript
let myFavSong = "My Stupid Mouth";
myFavSong.slice(3, 9); // 'Stupid' space not include
myFavSons.slice(11); // Mouth from 11 till the end
```

### Search for substring

use `str.indexOf`

```javascript
myFavSong.indexOf("Mouth"); // 10
myFavSong.indexOf("TEAM"); // -1 if not found
```

### includes, startWith and endsWith

will return boolean

```javascript
myFavSong.includes("Mouth"); // true
myFavSong.includes("TEAM"); // false

myFavSong.startWith("My"); // true
myFavSong.endsWith("Yes"); // false
```

### Trimming white space

use `str.trim()`

```javascript
let song = "      Back To You       ";
song.trim(); // 'Back To You' spaces between are not remove
```

### Replace

```javascript
let myFavSong = "My Stupid Mouth";
myFavSong.replace("My", "Your"); //'Your Stupid Mounth'
```

## Math Object

Math object contains about properties and methods for mathematical constant and function.

```javascript
Math.PI; // 3.141592653589793
Math.floor(5.8); // 5
Math.round(5.4); // 5, if 5.5 or more will get 6
Math.ceil(5.1); // 6
Math.abs(-123); // 123
Math.pow(3, 6); // 729, same as 3 ** 6
Math.random(); // will get random value from 0 to 1

// example for dice rolling
Math.floor(Math.random() * 6) + 1; // result from 1 to 6
```

### parseInt and parseFloat

Normally use for convert strings to numbers

```javascript
parseInt("24"); // 24
parseInt("24.54"); // get only 24
parseFloat("24.54"); // 24.54
parseFloat("2dsfsdf"); // 2
parseInt("Deeeee"); // NaN
```
