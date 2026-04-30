
class ScheduTask {
    constructor(maxJob) {
        this.maxJob = maxJob;
        this.queue = [];
        this.currentJob = 0
    }

    add(syncFn) {

        // 返回一个Promise
        return new Promise((resolve, reject) => {
            this.queue.push({
                syncFn,
                resolve,
                reject
            })
            this.runNext() // 主动触发一次
        })
    }
    runNext() {

        if (this.maxJob > this.currentJob && this.queue.length > 0) {
            const num = this.maxJob - this.currentJob;

            this.queue.splice(0, num).forEach(({ syncFn, resolve, reject }) => {
                this.currentJob++

                syncFn().then(resolve).catch(reject).finally(() => {
                    this.currentJob--
                    this.runNext()
                })
            })

        }
    }
}
const q = new scheduTask(6);

const syncFn = new Array(10).fill(null).map((_, i) => () => new Promise((reslove, reject) => {
    let index = i < 6 ? 0 : i
    setTimeout(() => {

        reslove(i)
    }, index * 500);
}))

syncFn.forEach(fn => {

    q.add(fn).then(res => {
        console.log(res, 'res');
    })
})