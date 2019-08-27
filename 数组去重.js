//对这个数组进行去重
var arr = ['aa', 'bb', 'cc', '', 1, 0, '1', 1, 'bb', null, null];

//循环整个数组push进新的数组,这种方式会遍历数组直到找到目标为止，此函数会浪费掉很多时间。
function partOne(arr) {
    let newArr = []
    for (let index = 0; index < arr.length; index++) {
        if (newArr.indexOf(arr[index]) < 0) {
            newArr.push(arr[index])
        }
    }
    return newArr
}
//console.log(partOne(arr))

//------------------------------------------------------------

//对象存放，可以使用对象的键值不可重复这一点来进行解决, 性能上面来看的话是耗时最短的，但是占用的空间更大，这就是空间换时间
Array.prototype.unique = function () {
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
Array.prototype.sorts = function () {
    this.sort((a, b) => a - b)
    let newArr = [this[0]]
    for (let i = 1; i < this.length; i++) {
        if (this[i] !== newArr[this.length - 1]) {
            newArr.push(this[i])
        }
    }
    return newArr
}
// console.log(arr.sorts())

//---------------------------------------------------------
//Array.from()方法就是将一个类数组对象或者可遍历对象转换成一个真正的数组。
function partTwo(arr) {
    return Array.from(new Set(arr)) //new Set返回的不是一个数组，而是一个set对象
}
// console.log(partTwo(arr))

//--------------------------------------------------------
function partThree(arr) { //es5中常用，两个for循环。第一个for循环外层元素。内层循环需要比较的元素，如果有相等的就删除掉
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                arr.splice(j, 1) //splice向项目中添加或者删除元素，如果有第三个参数则是想数组中添加元素
            }
        }
    }
    return arr
}
// console.log(partThree(arr))

//-------------------------------------------------------
function partFour(arr) { //这种方法与indexOf类似
    var arra = [];
    for (var i = 0; i < arr.length; i++) {
        if (!arra.includes(arr[i])) {//  检测数组是否有某个值 ， includes包含 返回boolean值 ， true或者false,接受两个参数，丢一个参数为必须，需要查找的元素值，第二个参数为可选值，从哪里开始寻找。默认是0
            arra.push(arr[i]);
        }
    }
    return arra
}
//  console.log(partFour(arr))

//-----------------------------------------------------
//利用filter方法进行去重，这个方法接受一个参数，参数为一个方法，filter方法创建一个空的新数组，新数组中的元素是通过检查指定数组中符合条件的所有元素，不会对空数组进行检测，不会改变原始数组。
function partFive(arr) {
    return arr.filter((res, index, arr) => {
        return arr.indexOf(res, 0) === index //此处写判断条件，如果为true，则将当前遍历到的元素返回到一个新的数组
    })
}
// console.log(partFive(arr))

//-----------------------------------------------------
//利用foreach map都可以, map会返回一个新的数组， foreach不会 只会对数组的元素操作
function partSix(arr) {
    let _arr = []
    arr.forEach((res) => {
        if (!_arr.includes(res)) {
            _arr.push(res)
        }
    })
    return _arr
}

// console.log(partSix(arr))

`
    concat()	连接两个或更多的数组，并返回结果。
    join()	把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。
    pop()	删除并返回数组的最后一个元素
    push()	向数组的末尾添加一个或更多元素，并返回新的长度。
    reverse()	颠倒数组中元素的顺序。
    shift()	删除并返回数组的第一个元素
    slice()	从某个已有的数组返回选定的元素
    sort()	对数组的元素进行排序
    splice()	删除元素，并向数组添加新元素。
    toSource()	返回该对象的源代码。
    toString()	把数组转换为字符串，并返回结果。
    toLocaleString()	把数组转换为本地数组，并返回结果。
    unshift()	向数组的开头添加一个或更多元素，并返回新的长度。
    valueOf()	返回数组对象的原始值

    es6新增
    Array.of() 创建数组用， 创建数组的新方法
    Array.from(), 接一个类数组对象或可迭代对象，把它们转化成数组。
    find(), findIndex()
    inludes 返回一个布尔值 true或者false
    fill 功能一： 字面意思填满，实际功能就是把数组中的每一个元素替换成指定值 功能二：指定范围替换，这功能似曾相识啊

`



`   
    个人理解为累加器 不会改变原数组
    arr.reduce(callback,[initiaValue])
    callback: 是一个函数，这个函数可接受4个参数，前两个是必须的。
        1.previousValue （上一次调用回调返回的值，或者是提供的初始值（initialValue））
        2.currentValue （数组中当前被处理的元素）
        3.index （当前元素在数组中的索引）
        4.array （调用 reduce 的数组）
    5.initialValue （作为第一次调用 callback 的第一个参数。）
`
var items = [10,2,3,4,5]
var total = items.reduce(function(pre,value){
    return pre + value
},0)
console.log(total)


Array.prototype.fakeReduce = function fakeReduce(fn, base) {
    if (typeof fn !== "function") {
      throw new TypeError("arguments[0] is not a function");
    }
    let initialArr = this;
    let arr = initialArr.concat();
  
    if (base) arr.unshift(base); //如果存在第二个参数 那么将它压入到数组的头部
    let index, newValue;
  
    while (arr.length > 1) {
      index = initialArr.length - arr.length + 1;
      newValue = fn.call(null, arr[0], arr[1], index, initialArr);
  
      arr.splice(0, 2, newValue); // 直接用 splice 实现替换
    }
  
    return newValue;
  };
`自己实现的-------------------------------------------`
    var arr = [1,2,23,3]
    var _arr = arr.reduce(function(pre,value){
        return pre+value
    },0)
    console.log(arr,_arr)
    Array.prototype.myreduce = function(func , pre) {
        let _pre = 0
        if (arguments[1]) {
            _pre = arguments[1]
        }
        let _this = this
        for (let i = 0; i < _this.length; i++) {
            _pre = func.call(null , _this[i] , i , _this)
        }
        return _pre
    }

`----------------------------------------------------------`

`
  splice
  向数组中添加或者删除或者替换项目，会改变原有数组的结构，并且生成一个新的数组
  1 index，必需 整数 规定添加/删除项目的位置，使用负数可从数组结尾处规定位置
  2 howmany 必须规定要删除的项目数量，如果设置为零，则不会删除项目
  3 tem1, ..., itemX	可选。要添加到数组的新元素
  替换的实现就是：删除当前的元素，同时添加上自己的元素
`
var list = [];
list.push(1);
list.push(2);
list.push(3);
console.log(list); // [1, 2, 3]

// 删除
list.splice(0, 1);  // 删除  -> 从下标为0开始,长度为1
console.log(list); // [2,3]
list.splice(0, 2);  // 删除  -> 从下标为0开始,长度为2
console.log(list); // []

//替换
list.splice(0, 1, 4); // 替换 -> 从下标为0开始,长度为1的数组元素替换成4
console.log(list);  // [4,2,3]
list.splice(0, 2, 4); // 替换 -> 从下标为0开始,长度为2的数组元素替换成4(即4,2整体替换成4)
console.log(list);  // [4,3]

//添加
list.splice(1, 0, 5); // 表示在下标为1处添加一项5
console.log(list); // [1,5,2,3] 
list.splice(1,0,5,4,3); // 表示在下标为1处依次添加5/4/3三个元素
console.log(list); // [1,5,4,3,2,3]

`----------------------------------------------------------`

`
    forEach
    不会返回任何值，只是用来执行回调
    第二个的参数：绑定第一个参数中this的指向
`
var that = this
var b = 2222
var a = {
    b:1,
    c:function(){
        [1,2,3].forEach(function(value,index){
            console.log(this.b)
        },that)
    }
}
a.c()
`
    这里的打印出来的内容为2222，把第一个参数中回调方法中的this指向了第二个参数
`

`
    sort: 数组排序的方法，但是并不是我们简单想的把数组按从小到大进行排序，如果我们不进行传递参数是按照 ACSII 码进行排序的。
    举例：
`
var nums = [12, 645, 6, 85, 81, 0, 9, 365, 4, 752] 
console.log(nums); // 排序前 [12, 645, 6, 85, 81, 0, 9, 365, 4, 752]
console.log(nums.sort()); // 排序后 [0, 12, 365, 4, 6, 645, 752, 81, 85, 9]
`
    简单的说就是按照数组的第一个数字的大小进行排序
    解决：传递参数，传递一个比较函数。如果第一个参数应该在前面，比较函数返回一个小于0的数值，相反就返回一个大于0的数值，假如两个数值相等，那么就返回0就可以啦。
`
var nums = [12, 645, 6, 85, 81, 0, 9, 365, 4, 752] 
console.log(nums.sort((a,b)=>a-b)); // 排序前 [12, 645, 6, 85, 81, 0, 9, 365, 4, 752]