const arr = [
  [0, 1],
  [2, 3],
  [4, 5],
  [6, 7]
];

const flattened = arr.reduce((acc, curr) => {
  return acc.concat(curr);
});

console.log(flattened);
