`
    实现一个promise
`
function _Promise(fn){
    this.resolve = function(value){
        this.status = "resolved"
        this.value = value
        this.then()
    }
    


    //当前的状态 状态的改变时不可变的
    this.status = "pending"
    this.value
    //判断传入进来的参数是否为函数
    let flag = Object.prototype.toString.call(fn).slice(8,-1)
    if (flag == "Function") {
        fn.call( this , this.resolve.bind(this) )
    }else{
        throw Error("传入的参数是一个函数")
    }
    this.then = function(One , Two){
        if(this.status == "resolved"){
            One(this.value)
        }
    }
   
}


let promise = new _Promise((resolve, reject) => {
    //这里放入我们要执行的函数，可能是同步，也可能是异步, 这里我们就来写一个异步的执行
    setTimeout(() => {
        resolve('hello');
    }, 100)
})
promise.then(res =>{
    console.log(res)
})
 promise.then(data => {
     console.log(data);
     return new Promise(function(res, rej) {
         setTimeout(function() {
             console.log(2);
             res();
         }, 100)
     })
 }, err => {console.log(err)})



`------------------------------------------------------------------------------------------------------------`

function _Promise(fn) {
    var value = null, succallbacks = [], failcallbacks = [];
    this.then = function (fulfilled, rejected) {
        succallbacks.push(fulfilled);
        failcallbacks.push(rejected);
    }

    function resolve(value) {
         succallbacks.forEach((callback) => {
             callback(value);
         })
    }

    function reject(value) {
        failcallbacks.forEach((callback) => {
            callback(value);
        })
    }

    fn(resolve, reject);
}

function fn(num) {
    return new _Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num); //1   去掉time 则不会执行
        }, 1000)
    })
}

fn(1).then(data => {
        console.log(data);
    }
);