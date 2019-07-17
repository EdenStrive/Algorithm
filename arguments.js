//同时实现 sum(a,b)与sum(a)(b)
function sum(){
    let valueOne = arguments[0]
    if (arguments.length == 2) {
        return valueOne+arguments[1]
    }else{
        return function(valueTwo){
            return valueOne+valueTwo
        }
    }
}
console.log(
    sum(2)(1),
    sum(2,1)
)
