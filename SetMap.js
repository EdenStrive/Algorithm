`
    es6新的数据结构，类似与数组，但是成员的值都是唯一的，没有重复的值
`
const x = new Set();
[11,11,22,22].forEach(a => x.add(a));
console.log(x)
`
    通过add方法向set结构中加入成员，结果set结构不会添加重复的值，所以可以实现去重
    也可以这么实现数组的去重
    向set加入值的时候不会发生类型转换，所以1与"1"不是一个值，所以可以实现字符串数字数组的去重
`
let _arr = new Set([1,2,3,3])
console.log([..._arr])

`
    Set.prototype.add(value)：添加某个值，返回 Set 结构本身。
    Set.prototype.delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
    Set.prototype.has(value)：返回一个布尔值，表示该值是否为Set的成员。
    Set.prototype.clear()：清除所有成员，没有返回值。
`

`-----------------------------------------------------------------------------------------`

`
    WeakSet结构与set类似，也是不重复的值的集合，但是他与set有两个区别
    1.WeakSet的成员只能是对象，而不能是其他类型的值
    2.WeakSet中的对象都是弱引用，如果其他对象都不在引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存
    ，不在考虑该对象还存在于WeakSet之中。
`