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
/**=======================异步================================ */
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
/**=================链式调用==================== */
// const promise = new MyPromise((resolve, reject) => {
//   resolve(2);
// });
// promise
//   .then((value) => {
//     console.log(value);
//     return new MyPromise((r) => r(3));
//   })
//   .then((value) => {
//     console.log(value);
//   });
/** =================错误捕获========================= */
// const promise = new MyPromise((resolve, reject) => {
//   console.log(a);
//   resolve("6666");
// });
// promise.then(console.log,console.log)
/** =================错误捕获========================= */
// const promise = new MyPromise((resolve, reject) => {
//   resolve("6666");
// });
// promise
//   .then((x) => {
//     console.log(x);
//     return a;
//   }, console.log)
//   .then(console.log, (reason) => {
//     console.log("错误了");

//     console.log(reason);
//   });
/** =================then无参数，是否会被传递========================= */
// const promise = new MyPromise((r,j) => j(2));
// promise
//   .then()
//   .then()
//   .then((r) => {
//     console.log(r);
//   },console.log);
/** =================all========================= */
const p1 = new MyPromise((r) => r(3));
const p2 = new MyPromise((r) => r(4));
const p3 = new MyPromise((r) => r(5));
const p4 = new MyPromise(r=>a)
MyPromise.all(["123", p1, p2, p3, "p4"]).then((res) => {
  console.log(res);
}, (reason)=>{
  console.log('错误了');
  console.log(reason);
});
/** =================finally========================= */
// const promise = new MyPromise((r,j) => {
//   setTimeout(() => {
//     // r("resolve");
//     j('reject')
//   }, 2000);
// });
// promise
//   .finally(() => {
//     console.log("----");
//   })
//   .then(console.log,console.log);

