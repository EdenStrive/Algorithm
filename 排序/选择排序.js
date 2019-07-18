//每次遍历选出最小的元素，然后与数组前面的元素进行调换
let arr = [ 3, 9 , 5 , 2 , 3 , 4 , 10 ] 
let min = null
let needChange = null

function selection(arr){
    for (let i = 0; i < arr.length; i++) {
        needChange = i
        for (let j = i+1; j < arr.length; j++) { 
            if (min == null) {
                min = i
            }
            if (arr[j]<arr[min]) {
                min = j
            }
        }
        if (min !== needChange && i+1 < arr.length) { //这里i+1 < arr.length 要判断一下是否越界。如果越界了就不要处理，会出现underfind 或 null
            let mid = arr[min]
            arr[min] = arr[needChange]
            arr[needChange] = mid
            min = null
        }
    }
    return arr
}
console.log(selection(arr))