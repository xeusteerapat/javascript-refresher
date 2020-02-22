# Objects

Objects are collections of properties. Properties are `key: value` pairs and we use custom keys to access the values.

the syntax is

```javascript
let myObject = new Object(); // "object constructor" syntax
let myObject = {}; // "object literal" syntax and we pretty much use it.
```

`key: value` pairs like this

```javascript
// an user object
let user = {
  firstname: "Teerapat", // key "firstname" store value "Teerapat"
  lastname: "Prommarak",
  id: 191, // key "id" store value 191
  age: 33
};
```

## Accesing properties

We can add, remove and read files from it any time. We can access the value of any key by using "dot notation"

```javascript
user.firstname; //  "Teerapat"
user.id; //  191
```

also we can add value with any type.

```javascript
user.isAdmin = true; // true
{
  firstname: 'Teerapat',
  lastname: 'Prommarak',
  id: 191,
  age: 33,
  isAdmin: true
}
```

even delete properties.

```javascript
delete user.id // will return true and id will be removed
{
  firstname: 'Teerapat',
  lastname: 'Prommarak',
  age: 33,
  isAdmin: true
}
```

and also we can use `["key"]` to access the value.

```javascript
user["firstname"]; // "Teerapat"
user["age"]; // 33
```

## Updating properties

```javascript
user.firstname = "David"; // firstname change to "David"
{
  firstname: 'David',
  lastname: 'Prommarak',
  age: 33,
  isAdmin: true
}
```

## Computed properties

In case of we do not know about the of properties, we can create properties which can receive key from input value like so

```javascript
let propName = prompt("Enter your favorite: ", "hobby");

user[propsName] = "Coding";
{
  firstname: 'David',
  lastname: 'Prommarak',
  age: 33,
  isAdmin: true,
  "hobby": "Coding"
}
```

## Property value shorthand

often use in function that return an object with properties which same as the arguments for example

```javascript
function makeUser(name, age) {
  return {
    name: name,
    age: age
  };
}

let user1 = makeUser("Tim", 40);

// we can write in shorthand
function makeUser(name, age) {
  return {
    name,
    age
  };
}
```

## Getting keys or values from object

we can get keys or values from an object using `Object.keys(obj)` or `Object.values(obj)` this will return an array.

```javascript
let user = {
  name: "Teerapat",
  age: 33,
  isAdmin: true
};

let keys = Object.keys(user);
// keys [ 'name', 'age', 'isAdmin' ]

let values = Object.values(user);
// values [ 'Teerapat', 33, true ]
```

## Checking property existence

to check about property existence test, accessing a non-existing property will return `undefined`

```javascript
let obj = {};

console.log(obj.noSuchProperty === undefined); // returns true
```

we also can check with `"key" in object` syntax

```javascript
let user = {
  name: "Pete",
  age: 30
};

let key = "age";
console.log(key in user); // returns true
```

## The `for-in` loop

```javascript
let user = {
  name: "Teerapat",
  age: 33,
  isAdmin: true
};

for (let key in user) {
  // keys
  console.log(key); // name, age, isAdmin
  // values for the keys
  console.log(user[key]); // Teerapat, 33, true
}
```

## Objects are reference type

same as Array, object is "pass by reference". I recommend you check [Copy by reference](https://javascript.info/object#copying-by-reference) here.

> A variable stores not the object itself, but its “address in memory”, in other words “a reference” to it.

```javascript
let user = { name: "John" };

let admin = user; // copy the reference, if we try to change properties in admin, user also change. Because 2 variables are pointing at the same address in memory.

admin.name = "Teerapat";
console.log(user.name); // also change to Teerapat
```

## Using `const` with object

same behavior with using `const` with Array. we still can change properties **_but cannot re-assign or re-declare_**

```javascript
const user = {
  name: "Anrew"
}

user.name = "Stephen";
console.log(user.name); // Stephen

// or even add new properties
user.age = 29;
{
  name: "Stephen",
  age: 29
}

// but remember, we cannot re-assign or re-declare
// Uncaught TypeError: Assignment to constant variable.
user = {
  name: "Ryan"
}
```

## Cloning and merging

There are 3 ways to clone an object

```javascript
const user = {
  name: "Teerapat",
  age: 33,
  isAdmin: true
};

const cloneUser = {};

// using for-in
for (let key in user) {
  cloneUser[key] = user[key];
}

// you can manipulate properties without effect to the original object.
cloneUser.name = "Kobe";
cloneUser
{ name: 'Kobe', age: 33, isAdmin: true }
user
{ name: 'Teerapat', age: 33, isAdmin: true }
```

using `Object.assign` to clone, the syntax is

```javascript
Object.assign(dest, [src1, src2, src3...])
```

```javascript
let user = {
  name: "Teerapat",
  age: 33
};

let cloneUser = Object.assign({}, user);
```

assign one object to another object by using arguments `dest, [src1, src2, src3...]` which are objects

```javascript
let user = {
  name: "john"
};

let prop1 = { age: 33 };
let prop2 = { isAdmin: true };

Object.assign(user, prop1, prop2);
// now we got user
{
  name: "john",
  age: 33,
  isAdmin: true
};
```
