# Control flow

Make the decision with javascript

## The "if" statement

```javascript
if (condition is true) {
  // do something
}

let myAge = 33;
if (myAge === 33) {
  console.log("33 is still young! LOL");
}

// 33 is still young! LOL
```

Before we go further, I'd like to introduce comparison operators

```javascript
> // greater than
< // less than
>= // greater or equal
<= // less than or equal
== // equality
!= // not equal
=== // strictly equal
!== // strictly not equal

if (2 < 3) {
    console.log("2 always less than 3")
}
```

## The "else" clause

if first condition is not true do another condition

```javascript
if (condition is true) {
  // do something
} else {
    // do something else
}

let myAge = 33;
let yourAge = 34;

if (myAge > yourAge) {
    console.log("I'm older than you");
} else {
    console.log("You're older than me");
}
// You're older than me
```

## The "else if" condition

when you have multiple conditions

```javascript
if (1st condition is true) {
    // do something
} else if (2nd condition is true) {
    // do another thing
} else if (3rd condition is true) {
    // do another thing
} else {
    // do something else
}

let yourRating = 5;
if (yourRating < 2) {
    console.log("You are normal");
} else if (yourRating <= 5) {
    console.log("You are superstar!");
} else {
    console.log("Hmmmm...how can I say");
}
```

## Ternary operators `?` and `:`

```javascript
let result = condition ? value1 : value2;

let accessAllowed =
  age > 18
    ? console.log("You can access to this website")
    : console.log("You are not allowed to access this website");
```

## Truthy and Falsy

Falsy value

- `false`
- `0`
- `""` empty string
- `null`
- `undefined`
- `Nan`

Everthing else is truthy!

```javascript
if (5) {
  console.log("5 is truthy value");
}
// 5 is truthy value

let loggedInUser = "";

if (loggedInUser) {
  console.log("YOU ARE LOGGED IN!");
} else {
  console.log("PLESE LOG IN!");
}

// PLESE LOG IN! because "" is falsy value.
```

## The "switch" statement

A `switch` statement can replace multiple `if` checks.

```javascript
switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}
```

compare with `if-else` statement

```javascript
let day = 1;

if (day === 1) {
  console.log("MONDAY");
} else if (day === 2) {
  console.log("TUESDAY");
} else if (day === 3) {
  console.log("WEDNESDAY");
} else if (day === 4) {
  console.log("THURSDAY");
} else if (day === 5) {
  console.log("FRIDAY");
} else if (day === 6) {
  console.log("SATURDAY");
} else if (day === 7) {
  console.log("SUNDAY");
} else {
  console.log("INVALID DAY!");
}
```

you can use `switch-case` just like this

```javascript
let day = 1;

switch (day) {
  case 1:
    console.log("MONDAY");
    break;
  case 2:
    console.log("TUESDAY");
    break;
  case 3:
    console.log("WEDNESDAY");
    break;
  case 4:
    console.log("THURSDAY");
    break;
  case 5:
    console.log("FRIDAY");
    break;
  case 6:
    console.log("SATURDAY");
    break;
  case 7:
    console.log("SUNDAY");
    break;
  default:
    console.log("INVALID DAY!");
}
```
