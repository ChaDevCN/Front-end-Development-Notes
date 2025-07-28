console.log("start");

setTimeout(() => {
  console.log("setTimeout====>1");
}, 1000);
setTimeout(() => {
  console.log("setTimeout====>2");
  setTimeout(() => {
    console.log("setTimeout====>3");
  }, 1000);
}, 2000);

console.time('耗时任务');
const start = Date.now().toString();

for (let i = 0; i < 10000; i++) {
  console.log(i);
}
console.timeEnd("耗时任务");

setTimeout(() => {
  console.log("00000000000000000000000", "setTimeout10");
}, 10);

/**
 * 即使setTimeout的时间设为10ms，如果主线程因为耗时任务同步任务超阻塞超过这个时间（如2000ms），
   异步任务也必须等主线程空闲才能执行。
    ● 异步任务是在Web APIs 中到倒计时，到时间后加入任务队列
    ● 真正执行】依赖于事件循环在主线程空闲时“拉”进行
    最终执行顺序，依赖于setTimeout的书写顺序，而非定时时长。
 */

/**=============案例1================= */
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");
// 案例1 执行顺序: A => C => B
/**=============案例2================= */
console.log("start");

setTimeout(() => {
  console.log("timeout 1");
}, 100);

setTimeout(() => {
  console.log("timeout 2");
}, 0);

console.log("end");
// 案例2 执行顺序: start => end => timeout 2 => timeout 1
/**
 * 解析：先打印start 两个setTimeout推入 web apis 然后打印end
 *      因为第二个只有0秒肯定比第一个快，tiemout2先被推入到task queue中
 *      所以先打印的是timeout 2
*/
/**=============案例3================= */
console.log("one");

setTimeout(() => {
  console.log("two");
  setTimeout(() => {
    console.log("three");
  }, 0);
}, 0);

console.log("four");
// 案例3 执行顺序: one => four => two  => three

/**=============案例4================= */
console.log("start");

setTimeout(() => {
  console.log("timeout");
}, 10);

const _start = Date.now();
while (Date.now() - _start < 1000) {}  // 耗时 1 秒

console.log("end");
// 案例4 执行顺序: start => end => timeout

/**=============案例5================= */

setTimeout(() => {
  console.log("1");
}, 0);

setTimeout(() => {
  console.log("2");
}, 0);

console.log("3");
// 案例5 执行顺序: 3 => 1 => 2




