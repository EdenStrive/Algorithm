`
    实现一个promise
`
function _Promise(fn){
    //当前的状态 状态的改变时不可变的
    this.status = "pending"
    //判断传入进来的参数是否为函数
    let flag = Object.prototype.toString.call(fn).slice(8,-1)
    if (flag == "Function") {
        // fn.call( this , this.resolve.bind(this) , this.reject.bind(this) )
    }else{
        throw Error("传入的参数是一个函数")
    }
}



let promise = new _Promise((resolve, reject) => {
    //这里放入我们要执行的函数，可能是同步，也可能是异步, 这里我们就来写一个异步的执行
    setTimeout(() => {
        resolve('hello');
    }, 100)
})
    
// promise.then(data => {
//     console.log(data);
//     return new Promise(function(res, rej) {
//         setTimeout(function() {
//             console.log(2);
//             res();
//         }, 100)
//     })
// }, err => {console.log(err)})
