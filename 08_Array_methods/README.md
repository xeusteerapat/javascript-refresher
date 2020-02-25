# Array callback methods

Arrays provide a lot of built-in methods that accept callback functions and they are super useful for manipulate collection of data.

## forEach

`forEach` calls a provided callback function once **for each** element in the array in ascending order.

```javascript
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach(number => {
  console.log(number * 2);
  // this will print 0 2 4 6 8 10 12 14 16 18 20
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
