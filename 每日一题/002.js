/**
 * 返回位于 nums 至少一条 对角线 上的最大 质数 。如果任一对角线上均不存在质数，返回 0 。

注意：

如果某个整数大于 1 ，且不存在除 1 和自身之外的正整数因子，则认为该整数是一个质数。
如果存在整数 i ，使得 nums[i][i] = val 或者 nums[i][nums.length - i - 1]= val ，则认为整数 val 位于 nums 的一条对角线上。


在上图中，一条对角线是 [1,5,9] ，而另一条对角线是 [3,5,7] 。
 */
// 1 2 3
// 5 6 7
// 9 10 11

const isPrime = (n, start = 2) => {
  if (n <= 1) return false; // 小于等于1不是质数
  if (n === 2) return true; // 2是质数
  if (n % start === 0) return false; // 能被整除，不是质数
  if (start * start > n) return true; // 检查到平方根就够了
  return isPrime(n, start + 1); // 递归检查下一个
};
/**
 * @param {number[][]} nums
 * @return {number}
 */
var diagonalPrime = function (nums) {
  let length = nums.length - 1;
  let start = 0;

  const result = [];

  nums.forEach((item) => {
    result.push(item[start]);
    result.push(item[length]);
    start++;
    length--;
  });

  const next = result.sort((a, b) => b - a);

  for (let index = 0; index < next.length; index++) {
    if (isPrime(next[index])) {
      return next[index];
    }
    if (index === next.length - 1) {
      return 0;
    }
  }
};

console.log(
  diagonalPrime([
    [788, 645, 309, 559],
    [624, 160, 435, 724],
    [770, 483, 95, 695],
    [510, 779, 984, 238],
  ])
);
