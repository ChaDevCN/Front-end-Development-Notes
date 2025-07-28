/**
 * Promise.all(iterable)
 * iterable: 可迭代对象，例如Array、string
 * 简单来说promise.all接受一个数组，当数组中的每一个Promise都被兑现时候
 * 返回的Promise也将被兑现（即使输入的是一个空的可迭代对象）,并返回一个包含所有
 * 兑现值的数组，如果输入的任何Promise被拒绝，则返回的Promise将被拒绝，并带有第一个被
 * 拒绝的原因
 */
const promise = 1;
const promise2 = Promise.resolve("promise2");
const promise3 = new Promise((r) => setTimeout(r, 2, "promise3"));
const promise4 = new Promise((r) => s);
Promise.all([promise3, promise2, promise]).then((res) => {
  console.log(res); // promise3 promise2 1
});
Promise.all([promise3, promise2, promise, promise4]).catch((res) => {
  /**
   * 如果其中有1个错误，虽然别的Promise仍然会执行，
   * 但是整体Promise.all 会变成rejected，
   */
  console.log(res); // 捕获错误 promise4
});
/**
 * Promise.allSettled(iterable)
 * 等到内部所有的Pormise(不管成功失败)执行完才返回一个Promise并且只能在.then中捕获
 */
Promise.allSettled([promise3, promise2, promise, promise4]).then((res) => {
  /**
    { status: 'fulfilled', value: 'promise3' },
    { status: 'fulfilled', value: 'promise2' },
    { status: 'fulfilled', value: 1 },
    {
      status: 'rejected',
      reason: ReferenceError: s is not defined
            at file:///C:/Users/charlie.l1u/Documents/GitHub/Front-end-Development-Notes/JavaScript/%E5%BC%82%E6%AD%A5%E7%BC%96%E7%A8%8B/008-promise%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95.js:12:33
            at new Promise (<anonymous>)
            at file:///C:/Users/charlie.l1u/Documents/GitHub/Front-end-Development-Notes/JavaScript/%E5%BC%82%E6%AD%A5%E7%BC%96%E7%A8%8B/008-promise%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95.js:12:18
            at ModuleJob.run (node:internal/modules/esm/module_job:222:25)
            at async ModuleLoader.import (node:internal/modules/esm/loader:316:24)
            at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:123:5)
    }
     */
  console.log(res); //
});
/**
 * Promise.race(iterable)
 * 多个promise，哪个先完成就返回哪个,成功会输出用then 失败catch
 * 剩余的promise也会被执行
 */

Promise.race([promise, promise, promise]).then(
  (res) => {
    console.log(res, "res");
  },
  (error) => {
    console.log(error, "--");
  }
);
