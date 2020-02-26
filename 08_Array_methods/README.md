# Array callback methods

Arrays provide a lot of built-in methods that accept callback functions and they are super useful for manipulate collection of data.

## forEach

`forEach` calls a provided callback function once **for each** element in the array in ascending order.

```javascript
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach(number => {
  console.log(number * 2);
  // this will print 0 2 4 6 8 10 12 14 16 18
});
```

you also can print out index for each element, just add second parameter.

```javascript
const myFavLang = ["javascript", "python", "go", "elixir", "rust", "C++"];

myFavLang.forEach((lang, idx) => {
  console.log(idx, lang);
});

0 javascript
1 python
2 go
3 elixir
4 rust
5 C++
```

## map

Create a new array with the result of calling a callback on every element in the array, then we can capture them to a new variable.

```javascript
const myFavLang = ["javascript", "python", "go", "elixir", "rust", "C++"];

const capLang = myFavLang.map(lang => {
  return lang.toUpperCase();
});

// capLang [ 'JAVASCRIPT', 'PYTHON', 'GO', 'ELIXIR', 'RUST', 'C++' ]
// myFavLang still the same.
```

more example

```javascript
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const numDetails = numbers.map(number => {
  return {
    number,
    isEven: number % 2 === 0
  };
});

// numDetails
[
  { number: 0, isEven: true },
  { number: 1, isEven: false },
  { number: 2, isEven: true },
  { number: 3, isEven: false },
  { number: 4, isEven: true },
  { number: 5, isEven: false },
  { number: 6, isEven: true },
  { number: 7, isEven: false },
  { number: 8, isEven: true },
  { number: 9, isEven: false }
];
```

another one, let's make all CAP words.

```javascript
const words = ["asap", "swat", "rsvp", "diy"];

const caps = words.map(word => {
  return word
    .toUpperCase()
    .split("")
    .join(".");
});

// caps
["A.S.A.P", "S.W.A.T", "R.S.V.P", "D.I.Y"];
```

## find

`find` returns the value of the **first element** in the array that satisfies the provided testing function (boolean function).

```javascript
const movies = [
  "The Fantastic Four",
  "Mr. and Mrs. Smith",
  "Mrs. Doubtfire",
  "Mr. Deeds"
];

const movie1 = movies.find(movie => {
  return movie.includes("Mrs");
});

// movie1 'Mr. and Mrs. Smith' it just return the first element that satisfies with our condition

const movie2 = movies.find(movie => {
  return movie.indexOf("Mrs") === 0;
});

// movie2 Mrs. Doubtfire นonly the first match
```

## filter

Create a new array with **all elements** that pass the test implemented by the provided function.

```javascript
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const oddNumbers = numbers.filter(n => {
  return n % 2 === 1;
});

// oddNumbers
[1, 3, 5, 7, 9];
```

with more complex example

```javascript
const books = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
    genres: ["fiction", "fantasy"]
  },
  {
    title: "Changing My Mind",
    authors: ["Zadie Smith"],
    rating: 3.83,
    genres: ["nonfiction", "essays"]
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
    genres: ["fiction", "graphic novel", "fantasy"]
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
    genres: ["fiction", "fantasy"]
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
    genres: ["fiction", "historical fiction"]
  },
  {
    title: "The Name of the Wind",
    authors: ["Patrick Rothfuss"],
    rating: 4.54,
    genres: ["fiction", "fantasy"]
  },
  {
    title: "The Overstory",
    authors: ["Richard Powers"],
    rating: 4.19,
    genres: ["fiction", "short stories"]
  },
  {
    title: "The Way of Kings",
    authors: ["Brandon Sanderson"],
    rating: 4.65,
    genres: ["fantasy", "epic"]
  },
  {
    title: "Lord of the flies",
    authors: ["William Golding"],
    rating: 3.67,
    genres: ["fiction"]
  }
];

const goodBooks = books.filter(book => {
  return book.rating > 4.5;
});

// goodBooks
[
  {
    title: "The Name of the Wind",
    authors: ["Patrick Rothfuss"],
    rating: 4.54,
    genres: ["fiction", "fantasy"]
  },
  {
    title: "The Way of Kings",
    authors: ["Brandon Sanderson"],
    rating: 4.65,
    genres: ["fantasy", "epic"]
  }
];

const fantasyBooks = books.filter(book => {
  return book.genres.includes("fantasy");
});

// this will return books with fantasy genres
```

this very useful when you want to query data from the database, you might do something like this:

```javascript
const query = "";
const results = book.filter(book => {
  return book.title.toLowerCase().includes(query.toLowerCase());
});
```

## some and every

Tests whether **all elements** in the array apss the provided function, return a `boolean` value.

```javascript
const words = ["dog", "dig", "log", "bag", "wig"];

words.every(word => {
  return word.length === 3; // true
});

words.every(word => {
  return word[0] === "d"; // false
});

words.every(word => {
  let last_letter = word[word.length - 1];
  return last_letter === "g";
});
```

let's see `some` method, similar to `every` but returns true if ANY of the array elements pass the test function.

```javascript
const words = ["dog", "jello", "log", "cupcake", "bag", "wag"];

// Are there any of words longer than 4 chars?
words.some(word => {
  return word.length > 4; // true
});

// Do any words start with 'Z'
words.some(word => {
  return word[0] === "Z"; // false
});

words.some(word => {
  return w.includes("cake"); // true
});
```

## sort (again)

In this section we will learn more about how to `sort` in array, and sorting array also mutate original one. let's break details below:

syntax

```javascript
arr.sort(compareFunc(a, b) {});
// callback function is a compare function
```

- If `compareFunc(a, b)` returns less than 0
  - _Sort a before b_
- If `compareFunc(a, b)` returns 0
  - _Leave a and b unchanged with respect to each other_
- If `compareFunc(a, b)` returns greater than 0
  - _Sort b before a_

let's see some examples

```javascript
const prices = [400.5, 3000, 99.99, 35.99, 12.0, 9500];

// Ascending sort
const asc = prices.sort((a, b) => {
  return a - b;
});

// Descending sort
const desc = prices.sort((a, b) => {
  return b - a;
});
```

## reduce

This is one of the most confusing topic in the array methods. I apologize in advance if something is not clear enough :sweat_smile:

> The `reduce()` method executes a **reducer** function on each element of the array, resulting in a **single** output value.

callback function in `reduce()` takes at lease 2 parameters

```javascript
arr.reduce(function(accumulator, currentValue) {
  return singleValue;
});
```

let's see some examples

```javascript
const numbers = [3, 5, 7, 9, 11];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue; // 35
});
```

here is what happens behind the scenes:

| callback | accom | current | return val |
| -------- | ----- | ------- | ---------- |
| 1st call | 3     | 5       | 8          |
| 2nd call | 8     | 7       | 15         |
| 3rd call | 15    | 9       | 24         |
| 4th call | 24    | 11      | 35         |

`reduce()` also can find maximum value in the array

```javascript
const grades = [89, 96, 58, 77, 62, 93, 81, 99, 73];

const topScore = grades.reduce((max, current) => {
  if (current > max) {
    return current;
  }
  return max; // 99
});

// or use Math.max to compare
const topScore = grades.reduce((max, current) => {
  return Math.max(max, current);
});
```

you also can optional parameters as a `initial` value at 3rd arguments

```javascript
const numbers = [3, 5, 7, 9, 11];

// last time, it returns 35 if I want to add 100 more as an initial value

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue; // 35
}, 100); // 135
```

we even use `reduce` to collect the values to the object

```javascript
const votes = ["y", "y", "n", "y", "n", "y", "n", "y", "n", "n", "n", "y", "y"];

const results = votes.reduce((acc, current) => {
  if (acc[current]) {
    acc[current] += 1;
  } else {
    acc[current] = 1;
  }
  return acc;
}, {});

// { y: 7, n: 6 }
```

how about flattening the array

```javascript
const arr = [
  [0, 1],
  [2, 3],
  [4, 5],
  [6, 7]
];

const flattened = arr.reduce((acc, curr) => {
  return acc.concat(curr);
});

// [0,1,2, 3, 4, 5, 6, 7]
```
