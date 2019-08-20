`
    在平时的js使用中通常会用到下面三中情况
    正常情况
`
function Foo(age){
    this.age = age
}
var o = new Foo(111)
console.log(o) //{age : 111}
  
`
  1.有return 非箭头函数 return非对象的情况
`
function Foo(age) {
    this.age = age;
  
    return 1;
  }
  
  var o = new Foo(333);
  console.log(o);//{age:333}

`
  2.有return 非箭头函数 return对象的情况
`
function Foo(age) {
    this.age = age;
  
    return { type: "我是显式返回的" };
  }
  
  var o = new Foo(222);
  console.log(o);//{type:"我是显示返回的"}

`
  原理：
  1）创建新的对象 o
  2）把构造函数的prototype 赋值给 新对象的 _proto_ ，同时新对象的constructor指向了构造函数
  3）执行构造函数，执行过程中内部 this 指向新创建的对象 o，也就是这样：ClassA.call(obj);
  4）将初始化完毕的新对象地址，保存到等号左边的变量中
    注意：若构造函数中返回this或返回值是基本类型（number、string、boolean、null、undefined）的值，则返回新实例对象；若返回值是引用类型的值，则实际返回值为这个引用类型。
`

`
  为什么instanceof能够实现判断对象的具体类型呢？
  typeof 对于 判断基本类型比较准确（null除外 typeof null为object，这是一个历史悠久的bug）但是对于object无能为力
  无论是function 还是 object 还是 array 它都会返回object，无法进行准确的判断，这时我们的instanceof就派上了用场
  直接开始撸源码
`
`
  判断 a 是否是 b 的一个实例
`
function _instanceof( a , b ){
    var b = b.prototype
    var a = a.__proto__
    while(true){ //进行无线循环 直到判断出 true 或者 false
        //Object.prototype.__proto__ === null null生万物
        if(a === null){ 
            return false
        }
        if (a === b) { //原型链继承 对比成功
            return true
        }
        //如果没有判断出 继续寻找需要被判断一方的_proto_ 然后再进行循环判断
        a = a.__proto__
    }
}