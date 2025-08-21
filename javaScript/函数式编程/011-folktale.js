/**
 *  folktale
 *  Folktale 是一个现代 JavaScript 的函数式编程工具集，
 *  提供了一些经典的“代数数据类型”和函数组合工具，常用于
 *  构建健壮、可组合、无副作用的函数式代码
 */

import pkg from 'folktale/core/lambda/index.js';
import fp from "lodash/fp.js";
const {  compose } = pkg;

const f = compose(fp.toUpper, fp.first);
console.log(f(["one", "two"]));
