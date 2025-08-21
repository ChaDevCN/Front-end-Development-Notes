/**
 * functor
 * 在现实开发中，我们没有办法完全避免副作用，但是我们尽可能的将副作用控制在可控的范围内
 * 我们可以通过函子去处理副作用，处理异常，异步等等
 *
 * 简单来说functor，就是有一个盒子容器，里边装了一个值
 * 可以对这个盒子容器的值使用 map(fn)，把值变化一下，但不改变盒子结构
 */

class Container {
  constructor(value) {
    this._value = value;
  }
  map(fn) {
    return new Container(fn(this._value));
  }
}

// const r = new Container(5).map((v) => v * 5).map((v) => v * 5);

// 上面这种方式是采用面向对象的方式，要修改成函数式编程思想，避免使用new

// class Container {
//   static of(value) {
//     return new Container(value);
//   }
//   constructor(value) {
//     this._value = value;
//   }
//   map(fn) {
//     return Container.of(fn(this._value));
//   }
// }

const r = Container.of(5)
  .map((v) => v * 5)
  .map((v) => v * 5);
