/**
 *  什么是纯函数
 *  1. 相同的输入永远会得到相同的输出
 *  2. 不会有任何副作用
 *  满足这两个条件就是纯函数
 */

import _ from "lodash-es";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

_.each(arr, (item, index) => {
  console.log(item, index);
});

/**
 * slice就是纯函数每次传入相同的参数都会返回相同的结果
 */
console.log(arr.slice(0, 3));
console.log(arr.slice(0, 3));
console.log(arr.slice(0, 3));
/**
 * splice不是纯函数
 * 每次传入相同的参数都会返回不同的结果
 */
// console.log(arr.splice(0,3));
// console.log(arr.splice(0,3));
// console.log(arr.splice(0,3));

/**
 * reverse是纯函数
 */
console.log(arr.reverse());
console.log(arr.reverse());
console.log(arr.reverse());

/**
 *  纯函数的好处
 *  1. 可缓存
 *  2. 可测试
 *  3. 并行处理
 *  4. 可组合
 *  5. 可预测
 */

function memoize(fn) {
  const cache = {};
  return function () {
    const key = JSON.stringify(arguments);
    cache[key] = cache[key] || fn.apply(fn, arguments);
    return cache[key];
  };
}
function getArea(r) {
  console.log(r);
  return Math.PI * r * r;
}
const memoizedGetArea = memoize(getArea);
console.log(memoizedGetArea(10));
console.log(memoizedGetArea(10));
console.log(memoizedGetArea(10));
