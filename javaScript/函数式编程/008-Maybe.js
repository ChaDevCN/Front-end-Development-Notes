/**
 * 007中我们实现了一个简易版的functor，但是如果传入null或者undefined会进行报错
 * 接下来我们修复这个问题
 */

class Maybe {
  static of(value) {
    return new Maybe(value);
  }
  constructor(value) {
    this._value = value;
  }
  map(fn) {
    return this.isNothing() ? Maybe.of(null) : Maybe.of(fn(this._value));
  }
  // 判断是否为空
  isNothing() {
    return this._value === null || this._value === undefined;
  }
  // 获取默认值
  getOrElse(str) {
    return this.isNothing() ? str : this._value;
  }
  //
  chain(fn) {
    return this.isNothing() ? Maybe(null) : fn(this._value);
  }
  //调试用
  inspect() {
    return `Maybe(${this._value})`;
  }
}

const r = Maybe.of("liu chang").map((s) => s.toUpperCase());
const res = Maybe.of("liu chang")
  .map((s) => s.toUpperCase())
  .map((x) => null)
  .map((x) => x + 1);
console.log(res);
console.log(r);
