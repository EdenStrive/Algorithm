let obj = {
    val:2,
    next:{
        val:4,
        next:{
            val:3,
            next:null
        }
    }
}
while(obj){
    console.log(obj)
    obj = obj.next
}

function object(){
    this.val = 1;
    this.cha = 2
}
let caonima = new object()
let x = new object(caonima)
console.log(x) 