function Father(){
    var a = 1;
    this.add = function(){
        a = a+1
    }
    this.say = function(){
        console.log(a)
    }
}
// Father.add()//is not a Function
var a = new Father()
var b = new Father()

a.add() //给a+1
a.say() //输出a的值，这个a是一个闭包，只能通过say来进行访问，只能通过特定的方法进行访问 a与b的a的值互不影响

`
    类：class
    提升：函数声明会提升，类声明不会。（一定要在类定义之后进行使用）
    严格模式：类声明和类表达式的主题都执行在严格模式下。比如构造函数、静态方法、原型方法都在严格模式下执行
            （严格模式：不允许使用未声明的对象，不允许删除对象、变量和函数，不允许变量重名，不允许删除一个不允许删除的属性（对象原型））
    构造函数：constructor方法是一个特殊的方法，一个类只能包括一个constructor
    原型方法：就是直接在类中定义的方法，相当于function.prototype
    静态方法：static 关键字来定义一个类的静态方法，调用静态方法不需要实例化该类，不能通过一个类实例调用静态方法。
`
`
    this:当一个对象顶用静态或原型方法时，如果该对象没有this值，那么this值在被调用的函数内部将为 underfind
`
class Animal{
    speak(){
        return this
    }
}
let obj = new Animal()
obj.speak();//Animal{}
let speak = obj.speak;
speak();//underfind
//////////////////////////////
function Animal(){}
Animal.prototype.speak = function(){
    return this;
}
let obj = new Animal();
let speak = obj.speak;
speak(); // global object
let eat = Animal.eat;
eat(); // global object

`
    使用extends创建子类
`

class Animal { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + ' barks.');
  }
}

var d = new Dog('Mitzie');
d.speak();// 'Mitzie barks.'
d.name; //Mitzie

`
    如果子类中存在构造函数( constructor )，则需要在使用使用this之前首先调用super()
    super方法就是用来创建父类this对象的
    如果子类没有定义constructor方法，constructor方法会默认被创建，并默认调用super函数
`
class Student extends Person {
}

// 等同于上方
class Student extends Person {
  constructor(...args) {
    super(...args);
  }
}
`
    super的具体作用
    如果super只是一个：super() 那么子类才可以用this这个对象，这个子类的this对象要基于父类进行创建（简单的说 如果子类想用this，那么必须需要掉用super这个方法）
`
class Animal { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
  constructor(newname){
    super();
    this.pig = newname
    }
  speak() {
    console.log(this.pig + ' barks.');
  }
}

var d = new Dog('Mitzie');
d.speak();// 'Mitzie barks.'
d.pig; //Mitzie
`
    如果想调用父类中的某个构造方法，比如name 那么就可以这么写（可以理解为劫持到父类的某些构造方法）
`
class Animal { 
    constructor(name) {
      this.name = name;
    }
    
    speak() {
      console.log(this.name + ' makes a noise.');
    }
  }
  
  class Dog extends Animal {
    constructor(name){
      super(name);
      }
    speak() {
      console.log(this.name + ' barks.');
    }
  }
  
  var d = new Dog('Mitzie');
  d.speak();// 'Mitzie barks.'
  d.name; //Mitzie