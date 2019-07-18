//从第二个元素开始遍历，每个元素与前面元素对比，如果小于他就插到他前面
let arr = [ 3, 9 , 5 , 2 , 3 , 4 , 10 ] 
let mark = null

function charu(arr){
    for (let i = 1; i < arr.length; i++) {
      for (let j = i-1; j >= 0; j--) {
          if (mark == null) {
              mark = i
          }
          if ( arr[mark] < arr[j] ) {
              let mid = arr[mark]
              arr[mark] = arr[j]
              arr[j] = mid
              mark = j
          }else{
              break;
          }
      }
      mark = null  
    }
    return arr
}
console.log(charu(arr))