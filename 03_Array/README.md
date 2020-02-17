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
