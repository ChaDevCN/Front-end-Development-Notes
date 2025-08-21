/**
 *  什么是generator
 *  Generator是一个可以暂停执行和继续执行的函数
 *   - 普通函数一旦调用就会一路执行到底，不能中途暂停
 *   - Generator可以中途yield暂停，然后在下次再从暂停的地方继续执行
 */
// function* foo() {
//   console.log("start");
//   yield "foo";
// }
// const generator = foo();
// const result = generator.next();
// console.log(result); //{ value: 'foo', done: false }
// console.log(generator.next()); // { value: undefined, done: true } done是true 说明generator执行完了

// function* foo() {
//   console.log("start");
//   const res = yield "foo";
//   console.log(res); //{ value: undefined, done: true }
// }
// const generator = foo();
// console.log(generator.next()); // { value: 'foo', done: false }
// console.log(generator.next("传入了")); // { value: undefined, done: true }

function* foo() {
  console.log("start");
  try {
    const res = yield "foo";
    console.log(res);
  } catch (error) {
    console.log("--",error); //这里可以捕获传入的错误
  }
}

const generator = foo();
console.log(generator.next()); // 第一次执行 { value: 'foo', done: false }
generator.throw(new Error("generator error")); // 向 yield 处抛出错误
