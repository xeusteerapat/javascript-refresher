// const multiply = (x, y) => x * y;

// const square = x => multiply(x, x);

// const isRightTriangle = (a, b, c) => {
//   return square(a) + square(b) === square(c);
// };

// isRightTriangle(3, 4, 5);

// console.log('I HAPPEN FIRST');
// setTimeout(() => {
//   console.log('HI!');
// }, 1000);
// console.log('I HAPPEN SECOND!');

// function baz(z) {
//   console.log(new Error().stack);
// }

// function bar(y) {
//   baz(y + 1);
// }

// function foo(x) {
//   bar(x + 1);
// }

// foo(3);
// return;

// const p = Promise.resolve('hello');

// p.then(val => {
//   console.log(val);
//   return `${val} world`;
// }).then(newVal => {
//   console.log(newVal);
// });

// const makeDogPromise = () => {
//   return new Promise((resolve, reject) => {
//     const grade = Math.round(Math.random() * 4);

//     if (grade > 2.5) {
//       resolve();
//     } else {
//       reject();
//     }
//   });
// };

// makeDogPromise()
//   .then(() => {
//     console.log('Congrats! You get a dog');
//   })
//   .catch(() => {
//     console.log('Sorry, No dog');
//   });

// const fakeRequest = url => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const pages = {
//         '/users': [
//           { id: 1, username: 'Teerapat' },
//           { id: 2, username: 'Aubameyang' }
//         ]
//       };

//       const data = pages[url];
//       if (data) {
//         resolve({ status: 200, data });
//       } else {
//         reject({ status: 404 });
//       }
//     }, 2000);
//   });
// };

// fakeRequest('/usersssssss')
//   .then(response => {
//     console.log('Status Code', response.status);
//     console.log('Data', response.data);
//     console.log('REQUEST SUCCEEDED');
//   })
//   .catch(response => {
//     console.log(response.status);
//     console.log('REQUEST FAILED');
//   });

// const fakeRequest = url => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const pages = {
//         '/users': [
//           { id: 1, username: 'Bilbo' },
//           { id: 5, username: 'Esmerelda' }
//         ],
//         '/users/1': {
//           id: 1,
//           username: 'Bilbo',
//           upvotes: 360,
//           city: 'Lisbon',
//           topPostId: 454321
//         },
//         '/users/5': {
//           id: 5,
//           username: 'Esmerelda',
//           upvotes: 571,
//           city: 'Honolulu'
//         },
//         '/posts/454321': {
//           id: 454321,
//           title: 'Ladies & Gentlemen, may I introduce my pet pig, Hamlet'
//         },
//         '/about': 'This is the about page!'
//       };
//       const data = pages[url];
//       if (data) {
//         resolve({ status: 200, data }); //resolve with a value!
//       } else {
//         reject({ status: 404 }); //reject with a value!
//       }
//     }, 1000);
//   });
// };

// // fakeRequest('/users').then(response => {
// //   const id = response.data[0].id;
// //   // make request again to get data from user id 1
// //   fakeRequest(`/users/${id}`).then(response => {
// //     const postId = response.data.topPostId;
// //     // make request again to get data from postId 454321
// //     fakeRequest(`/posts/${postId}`).then(response => {
// //       console.log(response);
// //     });
// //   });
// // });

// fakeRequest('/users')
//   .then(response => {
//     const id = response.data[0].id;
//     return fakeRequest(`/users/${id}`);
//   })
//   .then(response => {
//     const postId = response.data.topPostId;
//     return fakeRequest(`/posts/${postId}`);
//   })
//   .then(response => {
//     console.log(response);
//   })
//   .catch(error => {
//     console.log('OH NO!..', error);
//   });

function resolveAfter2Seconds() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('reject');
    }, 2000);
  });
}

async function asyncCall() {
  try {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
  } catch (err) {
    console.log('In catch with ', err);
  }
}

asyncCall(); //
