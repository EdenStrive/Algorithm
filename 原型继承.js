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
