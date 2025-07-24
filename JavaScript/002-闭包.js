/**
 *        闭包
 *  闭包是一个函数，它可以访问并记住定义时的词法作用域中的变量，
 *  即使这个函数的掉用发生在定义它的作用域之外。
 */
/** ============案例========= */

// 1. 私有变量保护（模块化）

function Person(name) {
  let _name = name;
  return {
    getName: () => _name,
    setName: (newName) => (_name = newName),
  };
}
const p = Person("Liuchang");
console.log(p.getName()); // 输出: Liuchang
p.setName("Liu");
console.log(p.getName()); // 输出: Liu

// 2. 计数器

function createCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

let counter = createCounter();
console.log(counter());
console.log(counter());

//3. 工具函数
// 只执行一次的函数
function once(fn) {
  let done = false;
  return function () {
    if (!done) {
      done = true;
      return fn.apply(this, arguments);
    }
  };
}
// 延迟执行
function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
}
