const PEDDING = "pedding";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";
export class MyPromise {
  constructor(executor) {
    executor(this.resolve, this.reject);
  }
  // promise 状态
  status = PEDDING;
  // 成功的值
  value = undefined;
  // 失败的原因
  reason = undefined;
  // 成功的回调
  successCallback = [];
  // 失败的回调
  fileCallback = [];
  resolve = (value) => {
    // 如果状态不是pedding 直接退出
    if (this.status !== PEDDING) return;
    // 将状态改为fulfilled
    this.status = FULFILLED;
    this.value = value;
    //消费成功的回调
    while (this.successCallback.length) {
      this.successCallback.shift()(this.value);
    }
  };
  reject = (reason) => {
    // 如果状态不是pedding 直接退出
    if (this.status !== PEDDING) return;
    // 将状态更改为 rejected
    this.status = REJECTED;
    // 收集错误原因
    this.reason = reason;
    //消费失败的回调
    while (this.fileCallback.length) {
      this.fileCallback.shift()(this.reason);
    }
  };
  then(onFulfilled, onRejected) {
    const promise2 = new MyPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        const x = onFulfilled(this.value);
        // 完成链式调用中下一个.then以来上一个.then的返回值
        resolvePromise(x, resolve, reject);
      } else if (this.status === REJECTED) {
        onRejected(this.reason);
      } else {
        // 如果异步任务，会进入到这里，状态还是pedding
        // 把成功、失败的回调存储起来
        this.successCallback.push(onFulfilled);
        this.fileCallback.push(onRejected);
      }
    });
    // .then链式调用
    return promise2;
  }
}
function resolvePromise(value, resolve, reject) {
  if (value instanceof MyPromise) {
    // 返回值是promise
    value.then(resolve, reject);
  } else {
    // 返回的值是普通纸
    resolve(value);
  }
}
