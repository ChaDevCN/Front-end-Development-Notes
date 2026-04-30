/**
 * js中的基本类型有 string number boolean null undefined symbol bigint 7个
 */
// tuples 元祖 用来给数组固定长度的ts

const names: [string, string] = ['tom', 'jeck']; // 超出长度会报错
const nicknames: [string, string?] = ['lis']; // 加？是可选

// 字面量类型
let a: "123" = "123"; 
const abc = '123'; // 因为const是常量，声明基本类型，默认成为了字面量类型

// 类型别名(type alias) 和 联合类型 
type ID = string | number; // type: 类型别名; sting | number 联合类型