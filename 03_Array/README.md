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

### concat

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

### includes

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

### reverse and join

```javascript
Array.reverse(); // be careful, you will mutate the old one.

let letters = ["A", "B", "C", "D", "E", "F", "G"];
letters.reverse(); // // ["G", "F", "E", "D", "C", "B", "A"]

let nums = [1, 2, 3, 4, 5];
nums.reverse(); // [5,4,3,2,1]

// join
letters.join("-"); // we can select the character to join them together.
// we'll get string "A-B-C-D-E-F-G"
```

if we join the other type (not string) in array, it will return as string.

```javascript
[1, 2, true, 14.3].join(""); // '12true14.3'
```

### slice

Slice method is not mutate the original array. It will a copy of the array that we've selected. Syntax is here

```javascript
arr.slice([start], [end]);
```

let's see example

```javascript
let myFavLang = ["javascript", "python", "go", "elixir", "rust", "C++"];

myFavLang.slice(2, 4); // start from index 2 not include 4 and we'll get [ 'go', 'elixir' ]

myFavLang.slice(3); // ["elixir", "rust", "C++"] from index 3 to the end.

myFavLang.slice(-4); // [ 'go', 'elixir', 'rust', 'C++' ] 4 items from the end.

// or just copy whole array
let yourFavLangMaybe = myFavLang.slice();
```

### splice

Splice can remove and replace elements inside the array, syntax here.

```javascript
arr.splice(index[, deleteCount, item1, ..., itemN])
```

see example

```javascript
let myWords = ["I", "javascript", "very", "much"];

// add start index1
// remove 0 item
// add love
myWords.splice(1, 0, "love"); // myWords = ["I", "love", "javascript", "very", "much"]

// remove start index3
// remove 2 items
// return [ 'very', 'much' ]
// but myWords = ["I", "love", "javascript"]
myWords.splice(3, 2);

// how'bout remove "love"
// add 2 words,
myWords.splice(1, 1, "really", "like");
// myWords = ["I", "really", "like", "javascript"]
```

### sort

Kinda weird when use this method because, it works only string.

```javascript
Array.sort();

let randomArr = ["Bee", "Dude", "Cat", "Angel"];

randomArr.sort(); // [ 'Angel', 'Bee', 'Cat', 'Dude' ] and also mutated
```

but if we try to sort numbers, it doesn't work as expected (some groups of numbers)

```javascript
let randomNums = [10, 1000000, 43, 356];
randomNums.sort(); // [ 10, 1000000, 356, 43 ] not even close! becuz it not a numeric sorted, it just convert to string and compare.
```

so, we try to sort array of numbers, we'll use helper function like so

```javascript
randomNums.sort((a, b) => {
  return a - b;
}); // then we'll get [ 10, 43, 356, 1000000 ]
```
