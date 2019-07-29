`
    浅拷贝：只能够解决一层的问题
    1.使用Object.assign来解决：Object.assign({},a)
    2.使用es6的结构 ...来进行实现浅拷贝
`
`
    深拷贝：可以解决多层拷贝的问题。
    1.通常可以使用JSON.parse(JSON.stringify)来解决。
        但是会存在以下以下缺点：
        （1）会忽略undefined
        （2）会忽略symbol
        （3）不能序列化函数    function
        （4）不能解决循环引用的对象

    解决方案：
            1.使用lodash的深浅拷贝函数： _.deepClone(object) _.deepClone(object) 来进行对象的深拷贝
            2.使用下面自己写的深拷贝函数：深度优先、广度优先
`


//工具函数：获取 类型
const _toString = Object.prototype.toString
function getType(obj){
    return _toString.call(obj).slice( 8 , -1 )
}


//简单深克隆
var deepCopy = function(obj) {
    if (typeof obj !== 'object') return;
    var newObj = obj instanceof Array ? [] : {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
        }
    }
    return newObj;
}


//深度优先
function DFSDeepClone(obj , vistied = new Set()){
    let res = {}
    if (getType(obj)==='Object' || getType(obj) === 'Array') {
        
    }else if(typeof obj === 'function'){
        
    } else{
        res = obj
    }
    return res
}