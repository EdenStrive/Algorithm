//对这个数组进行去重
var arr = ['aa','bb','cc','',1,0,'1',1,'bb', null , null];

//循环整个数组push进新的数组,这种方式会遍历数组直到找到目标为止，此函数会浪费掉很多时间。
function partOne(arr){
    let newArr = []
    for (let index = 0; index < arr.length; index++) {
        if ( newArr.indexOf(arr[index])<0 ) {
            newArr.push(arr[index])
        }
    }
    return newArr
}
//console.log(partOne(arr))

//------------------------------------------------------------

//对象存放，可以使用对象的键值不可重复这一点来进行解决, 性能上面来看的话是耗时最短的，但是占用的空间更大，这就是空间换时间
Array.prototype.unique = function(){
    let n = {}
    let r = []
    for (let index = 0; index < this.length; index++) {//js对象名为数字时是可以通过访问数组的方式访问对象中的值
        if (!n[this[index]]) {
            n[this[index]] = true //对这个对象的这个键值做上标记,这里的标记之所以用
            r.push(this[index])
        }
    }
    return r
}
// console.log(arr.unique())

//----------------------------------------------------------

//先排序，后比较 这种方法有限制，只能用于全为数字的比较，速度比第一种快，比第二种慢，但是空间占用没有第二种大
Array.prototype.sorts = function(){
    this.sort()
    let newArr = [this[0]]
    for (let i = 1; i < this.length; i++) {
        if (this[i] !== newArr[this.length-1]) {
            newArr.push(this[i])
        }
    }
    return newArr
}
// console.log(arr.sorts())

//---------------------------------------------------------
//Array.from()方法就是将一个类数组对象或者可遍历对象转换成一个真正的数组。
function partTwo(arr){
    return Array.from(new Set(arr)) //new Set返回的不是一个数组，而是一个set对象
}
// console.log(partTwo(arr))

//--------------------------------------------------------
function partThree(arr){ //es5中常用，两个for循环。第一个for循环外层元素。内层循环需要比较的元素，如果有相等的就删除掉
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                arr.splice(j,1) //splice向项目中添加或者删除元素，如果有第三个参数则是想数组中添加元素
            }
        }
    }
    return arr
}
// console.log(partThree(arr))

//-------------------------------------------------------
function partFour(arr){ //这种方法与indexOf类似
    var arra =[];
    for(var i = 0; i < arr.length; i++) {
            if( !arra.includes( arr[i]) ) {//includes 检测数组是否有某个值 ， includes包含 返回boolean值 ， true或者false,接受两个参数，丢一个参数为必须，需要查找的元素值，第二个参数为可选值，从哪里开始寻找。默认是0
                arra.push(arr[i]);
              }
    }
    return arra
}
//  console.log(partFour(arr))

//-----------------------------------------------------
//利用filter方法进行去重，这个方法接受一个参数，参数为一个方法，filter方法创建一个空的新数组，新数组中的元素是通过检查指定数组中符合条件的所有元素，不会对空数组进行检测，不会改变原始数组。
function partFive(arr){
    return arr.filter(( res,index,arr )=>{
        return arr.indexOf(res , 0) === index //此处写判断条件，如果为true，则将当前遍历到的元素返回到一个新的数组
    })
}
// console.log(partFive(arr))

//-----------------------------------------------------
//利用foreach map都可以, map会返回一个新的数组， foreach不会 只会对数组的元素操作
function partSix(arr){
    let _arr = []
    arr.forEach((res )=>{
        if ( !_arr.includes(res) ) {
            _arr.push(res)
        }
    })
    return _arr
}
// console.log(partSix(arr))


