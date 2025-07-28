/**
 *  什么是柯里化
 *  1. 当一个函数有多个参数的时候先传递一部分参数调用它（这部分参数以后永远不变）
 *  2. 然后返回一个新的函数接受剩余参数，返回结果
 *  严格来说柯里化是将一个多参数的函数转换成多个单参数的函数
 *  fn(a, b)(c)这种实际上是 偏函数`也是宽松柯里化`或者`灵活柯里化`
 */

import _ from "lodash-es";
/**=====================案例1========================= */
const checkAge = (min) => (age) => age >= min;
const checkAge18 = checkAge(18);
const checkAge20 = checkAge(20);
console.log(checkAge18(19));
console.log(checkAge18(17));
console.log(checkAge20(19));
console.log(checkAge20(21));

/**=====================案例2========================= */
const match = _.curry((reg, str) => str.match(reg));
const hoverSpace = match(/\s+/g);
const hoverNumber = match(/\d+/g);
const filter = _.curry((fn, arr) => arr.filter(fn));
const filterSpace = filter(hoverSpace);
const filterNumber = filter(hoverNumber);
console.log(hoverSpace("hello world"));
console.log(hoverNumber("hello world 123"));
console.log(filterSpace(["hello world", "hello", "world"]));
console.log(filterNumber(["hello world", "hello", "world 123"]));

/**=============实现curry==================*/

function curry(fn) {
  return function curried(...args) {
    if (args.length < fn.length) {
       /**
        * 如果传递的参数少于函数的参数，
        * 那么返回一个新的函数 供后续调用
        * 那么下次调用的时候就是这个匿名函数，
        * 匿名函数递归调用这个新函数，直到参数大于等于函数的参数
        */
      return function () {
        return curried(...args.concat(Array.from(arguments)));
      };
    }
    return fn(...args);
  };
}
function getSum(a, b, c) {
  return a + b + c;
}
const curriedGetSum = curry(getSum);
console.log(curriedGetSum);

console.log(curriedGetSum(1)(2)(3));
console.log(curriedGetSum(1)(2)(3));

