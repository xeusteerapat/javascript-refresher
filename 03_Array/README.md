# Array

Sometimes, we need to store ordered of collection or a list of something. We often use `Array`

There are two syntaxes for creating an empty array.

```javascript
let arr = new Array();
let arr = [];
```

The most popular is the second one.

```javascript
// Array of strings
let firstTeam = ["Ozil", "Auba", "Laca", "Pepe"];

// Array of numbers
let primeNum = [2, 3, 5, 7, 11, 13];
```

## Access (index into) an Array item

use `[]`

```javascript
let firstTeam = ["Ozil", "Auba", "Laca", "Pepe"];

firstTeam[0]; // "Ozil"
firstTeam[3]; // "Pepe"
```

we also can replace element

```javascript
let firstTeam[3] = "Gabriel"; // now ["Ozil", "Auba", "Laca", "Gabriel"];
```

or even add a new one

```javascript
let firstTeam[4] = "Hector"; // now ["Ozil", "Auba", "Laca", "Gabriel", "Hector"]
```

we can count total elements using `Array.length`

```javascript
firstTeam.length; // 5
```

and also can store element of any types together

```javascript
let mixArr = [1, "hi", true, function()];
```

## Array methods

`Array.push` add to the end  
`Array.pop` remove from the end  
`Array.shift` remove from start  
`Array.unshift` add from start

```javascript
let myFavNums = [2, 4, 7, 8];
myFavNums.push(9); // [2, 4, 7, 8, 9]

myFavNums.pop(); // [2, 4, 7, 8]

myFavNums.shift(); // [4, 7, 8]

myFavNums.unshift(2); // [2, 4, 7, 8]
```

more methods

### Concatetation

```javascript
array1.concat(array2);
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr3 = arr1.concat(arr2); // [1, 2, 3, 4, 5, 6]

// Even more than 2 arrays
let fruits = ["apple", "banana", "grape"];
let veggies = ["asparagus", "spinash"];
let meats = ["beef", "pork", "chicken"];

let allFood = fruits.concat(veggies, meats);
```

### Includes

will return boolean

```javascript
let myFavNBA = ["Kobe", "Lebron", "TMAC", "Carter", "PG13"];

myFavNBA.includes("Kobe"); // true
myFavNBA.includes("Steph"); // false

// Optional with start index
myFavNBA.includes("Lebron", 2); // false bcuz Lebron's index is 1
```

### indexOf

will return index of element, if no will return -1

```javascript
let myFavNBA = ["Kobe", "Lebron", "TMAC", "Carter", "PG13"];

myFavNBA.indexOf("TMAC"); // 2
myFavNBA.includes("Steph"); // -1

// and yes, we can add option like includes
```
