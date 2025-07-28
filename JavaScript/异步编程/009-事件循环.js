/**
 *  先执行同步任务，遇到宏任务推到宏任务队列
    遇到微任务推到微任务队列
    当所有的同步任务执行完成后，执行微任务
    当所有的微任务执行完成后，在执行宏任务
    然后进入下一轮 事件循环（Event Loop），重复上面过程  

    我个人认为：事件循环就是 循环执行上面的过程
 */
/**===========测试1========= */
console.log('start');

setTimeout(() => {
  console.log('timeout');
}, 0);

Promise.resolve().then(() => {
  console.log('promise');
});

console.log('end');

/**===========测试2========= */
console.log('start');

setTimeout(() => {
  console.log('timeout1');
}, 0);

setTimeout(() => {
  console.log('timeout2');
}, 0);

Promise.resolve().then(() => {
  console.log('promise1');
}).then(() => {
  console.log('promise2');
});

console.log('end');

/**===========测试3========= */
console.log('start');

Promise.resolve().then(() => {
  console.log('promise1');
  setTimeout(() => {
    console.log('timeout1');
  }, 0);
});

setTimeout(() => {
  console.log('timeout2');
}, 0);

console.log('end');

/**===========测试4========= */
console.log('start');

setTimeout(() => {
  console.log('timeout1');
  Promise.resolve().then(() => {
    console.log('promise1');
  });
}, 0);

Promise.resolve().then(() => {
  console.log('promise2');
});

console.log('end');

/**===========测试5========= */
console.log('start');

Promise.resolve().then(() => {
  console.log('promise1');
});

queueMicrotask(() => {
  console.log('microtask');
});

setTimeout(() => {
  console.log('timeout');
}, 0);

console.log('end');

/**===========测试6========= */
console.log('start');

setTimeout(() => {
  console.log('timeout');
  Promise.resolve().then(() => {
    console.log('promise inside timeout');
  });
}, 0);

Promise.resolve().then(() => {
  console.log('promise1');
});

console.log('end');

/**===========测试7========= */
console.log('start');

setTimeout(() => {
  console.log('timeout1');
}, 0);

Promise.resolve().then(() => {
  console.log('promise1');
  setTimeout(() => {
    console.log('timeout2');
  }, 0);
});

console.log('end');

/**===========测试8========= */
console.log('start');

Promise.resolve().then(() => {
  console.log('promise1');
}).then(() => {
  console.log('promise2');
}).then(() => {
  console.log('promise3');
});

setTimeout(() => {
  console.log('timeout');
}, 0);

console.log('end');

/**===========测试9========= */
console.log('start');

Promise.resolve().then(() => {
  console.log('promise1');
  queueMicrotask(() => {
    console.log('microtask inside promise');
  });
});

queueMicrotask(() => {
  console.log('microtask1');
});

setTimeout(() => {
  console.log('timeout');
}, 0);

console.log('end');

/**===========测试10========= */
console.log('start');

setTimeout(() => {
  console.log('timeout1');
  queueMicrotask(() => {
    console.log('microtask inside timeout');
  });
  Promise.resolve().then(() => {
    console.log('promise inside timeout');
  });
}, 0);

queueMicrotask(() => {
  console.log('microtask1');
});

Promise.resolve().then(() => {
  console.log('promise1');
});

console.log('end');



/**
 * 1: start=>end=>promise>timeout
 * 2: start=>end=>promise1=>promise2=>timeout1=>timeout2
 * 3: start=>end=>promise1=>timeout2=>timeout1
 * 4: start=>end=>promise2=>timeout1=>promise1
 * 5: start=>end=>promise1=>microtask=>timeout
 * 6: start=>end=>promise1=>timeout=>promise inside timeout
 * 7: start=>end=>promise1=>timeout1=>timeout2
 * 8: start=>end=>promise1=>promise2=>promise3=>timeout
 * 9: start=>end=>promise1=>microtask1=>microtask inside promise=>timeout
 * 10: start=>end=>microtask1=>promise1=>timeout1=>microtask inside timeout=>promise inside timeout
 */

