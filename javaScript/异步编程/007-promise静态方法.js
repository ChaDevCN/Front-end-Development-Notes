/**
 * Promise.resolve
 * Promise.reject
 */

Promise.resolve("foo-").then((value) => {
  console.log(value); // foo-
});
const promise = new Promise((r) => r("foo"));
const promise2 = Promise.resolve(promise);
console.log(promise === promise2); // true

Promise.resolve({
  then: function (onFulfilled, onRejected) {
    onFulfilled("foo");
  },
}).then((value) => {
  console.log(value); // foo
});
Promise.reject("anything").catch((err) => {
  console.log(err); //anything
});
Promise.reject(new Error("err")).catch((err) => {
  console.log(err); //err
});
