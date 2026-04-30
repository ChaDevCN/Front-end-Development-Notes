/**
 * 枚举是定义一组常量，为项目中乱七八糟的魔法数字和字符串赋予有意义的标签
 * 常用在 http状态码、用户角色、订单状态中，但是现在一般用js对象来完成，因为js更简单，并且支持tree-shaking。
 *
 * key concepts（关键概念）
 * 1. 数字枚举：从0开始(或者自定义起始值)自动递增，支持反向映射
 * 2. 字符串枚举：每个成员都有显示字符窜值的枚举
 * 3. as const： 断言，创建只读对象，比枚举用的更多
 * 4. 反向映射：数值枚举允许从值查找名称，但字符串不行
 */
// 数字枚举
var Priority;
(function (Priority) {
    Priority[Priority["Low"] = 0] = "Low";
    Priority[Priority["Medium"] = 1] = "Medium";
    Priority[Priority["High"] = 2] = "High";
    Priority[Priority["Crtical"] = 3] = "Crtical"; // 3
})(Priority || (Priority = {}));
var taskPriority = Priority.Crtical; // 3
// 反向映射
console.log(Priority[0]); // Low
// 字符串枚举
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "PENDING";
    OrderStatus["Processing"] = "PROCESSING";
    OrderStatus["Shipped"] = "SHIPPED";
    OrderStatus["Delivered"] = "DELIVERED";
})(OrderStatus || (OrderStatus = {}));
function updateOreder(status) {
    console.log("Order is now : ".concat(status));
}
updateOreder(OrderStatus.Shipped);
