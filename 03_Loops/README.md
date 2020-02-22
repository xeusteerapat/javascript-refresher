# Loops

We often use loops do repetitive tasks. There are 2 types of loops in javascript `while` and `for`.

## The `while` loop

```javascript
while (condition) {
  // code
  // in curly braces called "loop body"
}
```

ie. show output `i` while `i <= 10`

```javascript
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}
```

you can even write loop body without curly braces, if you have only one line of body like so.

```javascript
let i = 5;
while (i) console.log(i--);
```

## The `for` loop

`for` loop is more often used than while loop

```javascript
for (let i = 0; i <= 10; i++) {
  console.log(i);
  // result same as while loop as above
}
```

## Breaking the loop

Basically, a loop exits when condition is `false` but we can exit loop anytime using `break` for example

```javascript
while (true) {
  // always run the loop forever
  key = prompt("Enter key");
  if (key === "stop") break; // if we enter "stop" the loop will break and exit.
  value = prompt("Enter value");
  obj[key] = value;
}
```

## Continue

this `continue` statement does not break the loop. Instead, it stop current iteration and force the loop to start the next one.

```javascript
for (let i = 0; i < 10; i++) {
  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  console.log(i); // 1, 3, 5, 7, 9
}
```

## Nested loops

```javascript
function func5(n) {
  let ans = "";
  for (let i = n; i >= 1; i--) {
    for (let j = n; j >= 1; j--) {
      ans += i;
    }
    ans += "\n";
  }
  console.log(ans);
}

func5(4);
/*
4444
3333
2222
1111
*/
```
