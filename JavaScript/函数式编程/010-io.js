/**
 *  IO函子
 *  把副作用包进函数，先不执行，只有在手动调用的时候才会执行
 */
import fp from "lodash/fp.js";

class IO {
  static of(value) {
    return new IO(() => value);
  }
  constructor(value) {
    this._value = value;
  }
  map(fn) {
    return new IO(fp.flowRight(fn, this._value));
  }
  inspect() {
    return `IO: ${this._value}`;
  }
}

const r = IO.of(process).map((p) => p.execPath);
console.log(r._value());
