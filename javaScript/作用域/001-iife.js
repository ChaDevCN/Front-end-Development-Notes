/**
 * 函数写法不是标准写法，而是一个函数表达式
 * 如果第一行以fun开头 即为函数声明
 * 如果不是以fun开头 比如 (function... 表达式
 */

(function foo() {
  var a = 1;
  console.log(a);
})();
(function () {
  var a = 1;
  console.log(a);
})();

/**
 *
 *  1. 优势
 *      - umd
 *      - 避免和全局变量冲突
 *  简易版umd实现
 */

// (function (def) {
//   def(window);
// })(function (global) {
//   var a = 1;
//   console.log(a);
//   console.log("global", global);
// });

a = 2;
var a;
console.log(a);

// for (var i = 1; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i, "000");
//   }, i * 1000);
// }

for (var i = 1; i < 5; i++) {
  (function () {
    var j = i;
    setTimeout(() => {
      console.log(j);
    }, j * 1000);
  })();
}
