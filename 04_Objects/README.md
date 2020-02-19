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
