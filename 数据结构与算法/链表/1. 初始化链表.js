/**
 * 链表
 *  1. 链表是一种线性结构，其中每一个元素都成为节点，每一个节点指向下一个节点。
 */

class LinkNode{
    constructor(val,next){
        this.val = val === undefined ? 0 : val; // 当前节点值
        this.next = next === undefined ? null : next; // 指向下一个节点
    }
}

const node1 = new LinkNode(1);
const node2 = new LinkNode(2);
const node3 = new LinkNode(3);

node1.next = node2;
node2.next = node3;

console.log('链表头节点：',node1);
console.log('链表第二个节点：',node1.next);
console.log('链表第三个节点：',node1.next.next);

while (node1.next !== null) {
    console.log(node1.val);
    node1 = node1.next;
}