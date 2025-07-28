import { MyPromise } from "./myPromise.js";
/**=======================同步================================ */
// const r = new MyPromise((resolve, reject) => {
//   resolve(123);
//   reject(new Error("123"));
// });

// r.then(
//   (res) => {
//     console.log(res, "--");
//   },
//   (err) => {
//     console.log(err, "err");
//   }
// );
/**=======================同步================================ */
// const promise = new MyPromise((resolve, reject) =>
//   setTimeout(reject, 2000, "失败")
// );
// promise.then(
//   (res) => {
//     console.log(res, "1");
//   },
//   (err) => {
//     console.log(err);
//   }
// );
// promise.then(
//   (res) => {
//     console.log(res, "2");
//   },
//   (err) => {
//     console.log(err);
//   }
// );
// promise.then(
//   (res) => {
//     console.log(res, "3");
//   },
//   (err) => {
//     console.log(err);
//   }
// );

const promise = new MyPromise((resolve, reject) => {
  resolve(2);
});
promise
  .then((value) => {
    console.log(value);
    return new MyPromise((r) => r(3));
  })
  .then((value) => {
    console.log(value);
  });
