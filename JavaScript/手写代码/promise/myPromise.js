const PENDING = "pending";

const FULFILLED = "fulfilled";
const REJECTED = "rejected";
export class MyPromise {
  constructor(executor) {
    // 如果 executor 抛出错误，自动调用 reject 处理
    try {
      executor(this.resolve, this.reject);
    } catch (error) {
      this.reject(error);
    }
  }
  // promise 状态
  status = PENDING;
  // 成功的值
  value = undefined;
  // 失败的原因
  reason = undefined;
  // 成功的回调
  successCallback = [];
  // 失败的回调
  failCallback = [];
  resolve = (value) => {
    // 如果状态不是PENDING 直接退出
    if (this.status !== PENDING) return;
    // 将状态改为fulfilled
    this.status = FULFILLED;
    this.value = value;
    //消费成功的回调
    while (this.successCallback.length) {
      this.successCallback.shift()();
    }
  };
  reject = (reason) => {
    // 如果状态不是PENDING 直接退出
    if (this.status !== PENDING) return;
    // 将状态更改为 rejected
    this.status = REJECTED;
    // 收集错误原因
    this.reason = reason;
    //消费失败的回调
    while (this.failCallback.length) {
      this.failCallback.shift()();
    }
  };
  then(onFulfilled, onRejected) {
    if (!onFulfilled || typeof onFulfilled !== "function") {
      onFulfilled = (value) => value;
    }
    if (!onRejected || typeof onRejected !== "function") {
      onRejected = (reason) => reason;
    }
    // promise2 目的是为了.then链式调用
    const promise2 = new MyPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        // setTimeout 为了解决获取不到promise2
        setTimeout(() => {
          try {
            const x = onFulfilled(this.value);
            // 完成链式调用中下一个.then以来上一个.then的返回值
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      } else if (this.status === REJECTED) {
        setTimeout(() => {
          // 支持 .catch 后继续链式调用
          try {
            const x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      } else {
        // 如果异步任务，会进入到这里，状态还是PENDING

        // 存储包含完整逻辑的回调，等 resolve/reject 时再调用（避免多处 try/catch）
        this.successCallback.push(() => {
          setTimeout(() => {
            try {
              const x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
        this.failCallback.push(() => {
          setTimeout(() => {
            try {
              const x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
      }
    });
    // .then链式调用
    return promise2;
  }
  finally(cb) {
    // 返回promise 链式调用
    return this.then(
      (res) => MyPromise.resolve(cb()).then(() => res), // 将第一次的结果返回
      (reason) =>
        MyPromise.resolve(cb()).then(() => {
          throw reason;
        })
    );
  }
  catch(cb) {
    return this.then(undefined, cb);
  }
  static all(array) {
    if (!array || !Array.isArray(array)) {
      throw "非法参数";
    }
    const result = [];
    let index = 0; //已执行数个数

    return new MyPromise((resolve, reject) => {
      function addData(key, value) {
        result[key] = value;
        index++;
        if (index === array.length) {
          resolve(result);
        }
      }
      for (let i = 0; i < array.length; i++) {
        if (array[i] instanceof MyPromise) {
          // 异步
          array[i].then((res) => {
            addData(i, res);
          }, reject); //直接返回错误
        } else {
          // 同步
          addData(i, array[i]);
        }
      }
    });
  }
  static resolve(value) {
    if (value instanceof MyPromise) return value;
    return new MyPromise((r) => r(value));
  }
}
function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) return reject(new TypeError("不能循环引用"));

  if (x && (typeof x === "object" || typeof x === "function")) {
    //如果 x 是一个 promise 或 thenable
    try {
      const then = x.then;
      if (typeof then === "function") {
        return then.call(
          x,
          (y) => resolvePromise(promise2, y, resolve, reject),
          reject
        );
      }
    } catch (e) {
      return reject(e);
    }
  }

  resolve(x);
}
