`
    快速排序：分治法
    1．先从数列中取出一个数作为基准数。
    2．分区过程，将比这个数大的数全放到它的右边，小于或等于它的数全放到它的左边。
    3．再对左右区间重复第二步，直到各区间只有一个数。  

`
let arr = [ 3, 9 , 5 , 2 , 3 , 4 , 10 ] 

function fast(arr) {
    if (arr.length < 2) {
        return arr 
    }else{
        let arrOne = arr[0]
        let left = []
        let right = []
        for (let i = 1; i < arr.length; i++) {
            if (arr[i]<arrOne) {
                left.push(arr[i])
            }else{
                right.push(arr[i])
            }
        }
        return fast(left).concat(arrOne,fast(right))
    }
}
console.log(fast(arr))