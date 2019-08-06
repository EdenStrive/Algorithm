const PENDING = "pending"
const FULFILLED = "fulfilled"
const REJECTED = "rejected"

function myPromise(fn){
    if (typeof fn !== "function") {
        throw Error("请传入一个参数为函数")
    }
    let that = this //缓存当前promise实例对象
    that.status = PENDING //初始状态
    that.value = undefined //fulfilled状态时，返回的信息
    that.reason = undefined //rejected 状态时，拒绝的原因
    that.onFulfilledCallbacks = [] //存储fulfilled状态对应的onFulfilled函数
    that.onRejectedCallbacks = [] //存储rejected状态对应的onRejected函数
}