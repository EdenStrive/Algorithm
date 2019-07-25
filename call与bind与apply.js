`
    当call的第一个参数为null、underfind时 全局的对象指向了windows
    原理就是：利用调用对象内的方法，this指向对象内部
`

`

这是最简单的版本，没有考虑，后面传递的参数，以及有多个参数

Function.prototype.mycall = function(content){
    content.fn = this
    content.fn()
    delete content.fn
}

`
`
bind与call传递参数方式是一样的
bind与call传递参数方式是一样的
bind与call传递参数方式是一样的
bind与call传递参数方式是一样的
bind call
bind call

`

//这是用es6实现一个自己的call方法
Function.prototype.mycall = function(content){
    //this就是代表的那个call的那个方法
    content.fn = this
    let _argumentArr = [...arguments].slice(1)
    content.fn(..._argumentArr)
    delete content.fn
}

//咱们再来实现一个apply
Function.prototype.myapply = function(content){
    content.fn = this
    //因为apply第二参数传递过来的是一个数组
    let _argumentArr = arguments[1]
    content.fn(..._argumentArr)
    delete content.fn
}


//手动实现一个bind
//利用apply来进行实现
Function.prototype.mybind = function(content){
    let _arr = [...arguments].slice(1)
    return content.apply( content, _arr )
}


var a = 1

var obj = {
    a:2
}

function con(data,datatwo){
    console.log(this.a+data+"ds"+datatwo)
}

console.log(con(1))
console.log(con.call(obj,1,"213"))

