//每次遍历确定一个最大的数排到数组的最后面，然后数组的长度减一，以此类推
let arr = [ 3, 9 , 5 , 2 , 3 , 4 , 10 ] 
let maxKey = null

function bubble(arr){
    let arrLength = arr.length
    for (let i = 0; i < arrLength; arrLength--) { //注意：每一次冒泡后，数组的长度都要减1，每次冒泡都要从数组的第一个元素开始与每个元素进行比较
        for (let j = i+1; j < arrLength; j++) {
            if (maxKey == null) {
                maxKey = i //将键值赋值给maxKey
            }
            if (arr[maxKey]>arr[j]) {
                let mid = arr[maxKey]
                arr[maxKey] = arr[j]
                arr[j] = mid
                maxKey = j
            }else if(arr[maxKey]<arr[j]){
                maxKey = j
            }
        }
        maxKey = null
    }
    return arr
}
console.log(bubble(arr))