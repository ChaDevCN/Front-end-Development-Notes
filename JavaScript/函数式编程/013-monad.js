import fp from "lodash/fp.js";
import fs from "fs";
class IO {
  of(value) {
    return function () {
      return value;
    };
  }
  constructor(value) {
    this._value = value;
  }
  map(fn) {
    return new IO(fp.flowRight(fn, this._value));
  }
  join(){
    return this._value()
  }
  flatMap(fn){
    return this.map(fn).join()
  }
}

const readFile = (filename) => {
  return new IO(function () {
    return fs.readFileSync(filename, "utf-8");
  });
};
const print = function (x) {
  return new IO(function () {
    return x;
  });
};
const cat = readFile('.././package.json').flatMap(print).join()



console.log(cat);
