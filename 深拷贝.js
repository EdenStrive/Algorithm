//工具函数
const _toString = Object.prototype.toString
function getType(obj){
    return _toString.call(obj).slice( 8 , -1 )
}
