`
    防抖：如果一个事件连续触发，且每次触发函数的间隔小于wait，那么就会执行一次。
    节流：如果一个事件连续触发，不管触发的频率有多快，都会每隔一段时间触发一次。
`
`
    防抖：比如搜索，只有你在搜索填写字结束的时候才会进行自动搜索。
    实现一个简单防抖的简单原理：就是利用计时器，给定时器设置一个执行时间，如果再这个时间内（函数还未执行）
    再次触发将清除计时器。以达到执行连续触发只执行一次的效果
`
//写成一个通用的函数，需要执行防抖的函数只需要传入进去即可
//参数包括n个，最少包括两个，第一个为需要执行防抖的函数，第二个参数是函数触发时间间距小于多少时不会再次触发。
//其余的参数都会传递给需要被执行防抖函数的参数
let timer = 0
let debounce = (func , wait )=>{
    if (timer) {
        clearTimeout(timer)
    }else{
        timer = setTimeout(() => {
            //此处要考虑传入函数执行时是否需要参数
            let _arr = [...arguments].slice(2)
            func.apply(func,_arr)
            timer = 0;
        }, wait);
    }
}
`
    节流和防抖在本质上面试不同的，防抖是将连续多次的触发转换为只执行一次，
    而节流是将连续多次触发执行变成每个一段时间执行一次。
`
let timer = 1
let throttle = function(func , wait ){
    if (timer) {
        let _arr = [...arguments].slice(2)
        timer = 0
        func.apply(func , _arr)
        setTimeout(() => {
            timer = 1
        }, wait);
    }else{
        return
    }
}