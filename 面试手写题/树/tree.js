const tree = {
    val: 'A',
    children: [
        {
            val: 'B',
            children: [
                { val: 'D', children: [] },
                { val: 'E', children: [] }
            ]
        },
        {
            val: 'C',
            children: [
                { val: 'F', children: [] },
                { val: 'G', children: [] }
            ]
        }
    ]
};


const bfs = (tree) => {
    let queue = [tree];
    while (queue.length > 0) {
        const current = queue.shift();
        if (tree.children && tree.children.length > 0) {
            queue.push(...bfs(tree.children))
        }
    }
    return queue

}

console.log(bfs(tree));
