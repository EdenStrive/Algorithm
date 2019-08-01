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
var obj = {
    a:1,
    b:{
        c:2,
        d:function(){
            console.log(3)
        }
    }
}
obj.c = obj.b
obj.b.c = obj.c
console.log(obj)

//工具函数：获取 类型
`
    这里写一个获取类型的方法是用于解决 typeof 无法判断object 与 array

    这里为什么要使用object原型上面的toString来判断类型呢
    如果直接使用toString的话，就是单纯的转化为字符串
        Array 、Function等类型作为Object的实例，都重写了toString方法。不同的对象类型调用toString方法时，
        根据原型链的知识，调用的是对应的重写之后的toString方法（Function类型返回内容为函数体的字符串，
        Array类型返回元素组成的字符串.....），而不会去调用Object上原型toString方法（返回对象的具体类型）
`
let getType = function(data){
    return Object.prototype.toString.call(data).slice(8,-1)
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


//深度优先( 递归 )
function DFSDeepClone(obj, vistied = new Set()) {
    let res = {}
    if (getType(obj) === 'Object' || getType(obj) === 'Array') {
      if (vistied.has(obj)) {
        // 处理环状结构
        res = obj
      } else {
        vistied.add(obj)
        res = getType(obj) === 'Object' ? {} : []
        Object.keys(obj).forEach(k => {
          res[k] = DFSDeepClone(obj[k], vistied)
        })
      }
    } else if (getType(obj) === 'Function') {
      res = eval(`(${obj.toString()})`)
    } else {
      res = obj
    }
   
    return res
  }
  


