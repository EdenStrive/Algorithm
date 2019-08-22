`
    x方法是需要继承的方法。
`
// 定义一个需要被继承的方法 就是这个animal
function Animal (name) {
  this.name = name || 'Animal';
  this.sleep = function(){
    console.log(this.name + '正在睡觉！');
  }
}
Animal.prototype.eat = function(food) {
  console.log(this.name + '正在吃：' + food);
};

var simply = new Animal()
console.log(simply.name)

//原型链继承
function cat(){
}
cat.prototype = new Animal()

var simply2 = new cat("cat2")
var simply3 = new cat("dog")

//组合继承
function dog(name){
    Animal.call(this, name)
}
dog.prototype = new Animal()
dog.prototype.constructor = dog





`
  版本二：----------------------
`
function Person(name,age){
  this.name = 1;
  this.age = age
  this.sum = function(){
    console.log(this.name)
  }
}
Person.prototype.age = 10;

`
  --------------------------
  原型链继承：
`
function Per(){
  
}
Per.prototype = new Person()
var per1 = new Per()
var per2 = new Per()
per1 instanceof Per//true
per1 instanceof Person//true
per1 == per2 //false
//缺点： 1.新实例无法向父类构造函数进行传参
//      2.继承单一，所有通过Per实例后的对象都是一样的（无论你穿不穿地参数）


`
  --------------------------
  组合继承：
`
function SubType(){
  Person.call(this,...arguments);
}
SubType.prototype = new Person();
var sub = new SubType("gegegege");
var sub1 = new SubType("gegegege222");
sub instanceof SubType//true
sub instanceof Person//true
//没有什么缺点，就是调用了两次父类构造方法

`
  -------------------------
  寄生继承：
`
