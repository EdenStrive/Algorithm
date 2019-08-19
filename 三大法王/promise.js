
`--------------------------------------------------------------------------------------------------------------------`

function _Promise(fn) {
    //成功的回调 失败的回调
    var succallbacks = [], failcallbacks = [];
    //设置状态
    var flag = "pending"
    
    function resolve(value) {
        if (flag == "pending") {
            flag = "resolve"
            setTimeout(() => {
                succallbacks.forEach((callback) => {
                    callback(value);
                })
            })
        }
    }

    function reject(value) {
        if (flag == "pending") {
            flag = "reject"
            setTimeout(() => {
                failcallbacks.forEach((callback) => {
                    callback(value);
                })
            })
        }
    }

    //这里其实就是传一个参数，真正的执行 是在resolve的时候
    this.then = function (fulfilled, rejected) {
        succallbacks.push(fulfilled);
        failcallbacks.push(rejected);
        //执行完then 后保证可以执行 catch
        return this
    } 

    this.catch = function(errfn){
        failcallbacks.push(errfn)
        //这里不用加this，因为catch return不会产生链式调用
    }

    fn(resolve, reject);
}

`--------------------------------------------------------------------------------------------------------------------`

function fn(num) {
    return new _Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num); 
            //因为状态不可逆，所以catch捕获不到
            reject(num)
        }, 1000);  
    })
}

fn(1)
    .then(data => {
        console.log(data);
        return 1
    },err=>{
        console.log(err)
    })
    .catch(err =>{
        console.log(err)
    })