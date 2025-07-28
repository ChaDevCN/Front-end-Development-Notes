/**
 *  函数组合
 *  函数组合就是多个函数嵌套执行，前一个函数的输出是下一个函数的输入
 *  函数组合要满足结合律
 */
import { flowRight } from "lodash-es";
const compose = (f, b) => (value) => f(b(value));

const reverse = (arr) => arr.reverse();

const first = (arr) => arr[0];

const last = compose(first, reverse);
const _last = flowRight(first, reverse);
console.log(last([1, 2, 3]));
console.log(_last([1, 2, 3, 4]));
const toUpper = (str) => str.toUpperCase();

/**==========模拟实现函数组合======*/

function flow() {
  const values = Array.from(arguments);
  return function _flow(initialValue) {
    let result = initialValue;
    for (let i = 0; i < values.length; i++) {
      result = values[i](result);
    }
    return result;
  };
}
function flowR() {
  const values = Array.from(arguments).reverse();
  return function _flow(initialValue) {
    let result = initialValue;
    for (let i = 0; i < values.length; i++) {
      result = values[i](result);
    }
    return result;
  };
}
const f = flow(reverse, first, toUpper);
const fr = flowR(toUpper, first, reverse);

console.log(f(["a", "b"]));
console.log(fr(["a", "b", "c"]));

const _compose =
  (...args) =>
  (value) =>
    args.reverse().reduce((acc, fn) => fn(acc), value);

const fn = _compose(toUpper, first, reverse);
console.log(fn(["one", "two", "three"]));
