/**
 *  只要满足以下两点即为高阶函数
 *  1. 函数可以接受一个函数或多个函数作为参数
 *  2. 函数可以返回一个函数
 */

// 函数作为参数
function forEach(arr, fn) {
  if (arr && Array.isArray(arr) && typeof fn === "function") {
    for (let i = 0; i < arr.length; i++) {
      fn(arr[i], i, arr);
    }
  }else{
    throw new Error("arr不是一个数组或fn不是一个函数");
  }
}
const arr = [1, 2, 3, 4, 5];
forEach(arr, (item, index) => {
    console.log('当前元素:', item, '索引:', index);
})

// 函数作为返回值

function makeFn() {
    let msg = `hello Liuchang`;
    return function() {
        console.log(msg);
    }
}

makeFn()();

/**=============once=========== */

function once(fn) {
    let done = false;
    return function(){
        if(!done) {
            done = true;
            return fn.apply(this,arguments)
        }
    }
}

let pay = once(function(money) {
    console.log(`支付了${money}元`);
});

pay(100); // 支付了100元
pay(200); // 不会输出任何内容，因为已经支付过一次了