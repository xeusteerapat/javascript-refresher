const getData = url => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => resolve(response.json()))
      .catch(error => reject(error));
  });
};

const promise1 = getData('https://jsonplaceholder.typicode.com/users');
const promise2 = getData('https://jsonplaceholder.typicode.com/posts');
const promise3 = getData('https://jsonplaceholder.typicode.com/todos');

Promise.all([promise1, promise2, promise3]).then(result => console.log(result));
