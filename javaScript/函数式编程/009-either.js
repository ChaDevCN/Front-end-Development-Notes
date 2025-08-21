/**
 * either
 * either是函数式编程中的一种数据结构，也叫函子，用于处理可能失败的计算
 */

class Left {
  static of(value) {
    return new Left(value);
  }
  constructor(value) {
    this._value = value;
  }
  map() {
    return this;
  }
}

class Right {
  static of(value) {
    return new Right(value);
  }
  constructor(value) {
    this._value = value;
  }
  map(fn) {
    return Right.of(fn(this._value));
  }
}

function safeParse(str) {
  try {
    return Right.of(JSON.parse(str));
  } catch (error) {
    return Left.of({
      type: "error",
      message: error.message,
    });
  }
}

const r1 = safeParse(`{ name: liuchang }`);
const r2 = safeParse(`{ "name": "liuchang" }`);
console.log(r2.map((v) => v.name.toUpperCase()));
console.log(r1.map((v) => v.toUpperCase()));
