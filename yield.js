`
    俗称：生成器函数

    作用：断点执行

    用法：在函数function后面加一个*号，那么这个函数就变成一个生成器函数了，yield执行断点

    注意：首次执行方法时的对象称为断点对象（没有用next），只有使用next（）的时候才会执行到yield执行结束为止

    yield：返回的结果有是一个对象，有两个参数，一个是执行的结果value，一个是 done字段，值为 false 与 true，当所有的yield都执行完毕的时候，这个done字段会变成true
`
function* go(x){
    console.log("x",x)
    let a = yield x;
    console.log("xx", x)
    console.log('a',a)
}
let part = go(10)
part.next()

`
    这里的next传递的值需要注意下
`
let gos = function*(x) {
    console.log('x', x);
    let a = yield x;
    console.log('xx', x);

    console.log('a', a);

    let b = yield (x + 1) + a;

    yield a + b;

    console.log('a + b =', a + b);

    return a + b;
  }
  gos(10);
  let g = gos(10);
  console.log(g.next());
  //这里传入的1000是上一个next中存储在 a中的值
  console.log(g.next(1000).value);
  console.log(g.next(50));
  console.log(g.next(8));
  console.log(g.next(8));


`
  实现利用yield 进行promise按次序进行加载
  forEach中无法使用 yield
`
  
let a = function(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("a")
        },0)
    })
}
let b = function(){
	return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("b")
        },0)
    })
}
let arr = [a,b];

function* xwp(arr){
	for(let i = 0 ; i < arr.length; i++){
		yield arr[i]()
  
	}
}

let end = xwp(arr)
end.next().value.then(res=>{
    console.log(res)
})

`
    阻塞加载: 依次调用
`
  
let a = function(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("a")
        },3000)
    }).then(res => console.log(res))
}
let b = function(){
	return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("b")
        },0)
    }).then(res => console.log(res))
}
let arr = [a,b];

async function xwp(arr){
	for(let i = 0 ; i < arr.length; i++){
	    await arr[i]()
	}
}
xwp(arr)
