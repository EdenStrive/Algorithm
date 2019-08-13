`
    概念：能够访问另一个函数作用域的变量的函数

    为什么能够访问其他函数的作用域：首先没有被垃圾回收机制回收掉，为什么没有被回收掉呢，因为一个全局变量引用着函数中的局部变量，导致他无法被回收。


`
var obj = {
    name:"xingwenpeng",
    sayName:function(){
        return function(){
            console.log(this.name)
        }
    }
}
obj.sayName()()