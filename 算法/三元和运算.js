`
    给出一个整数，这些数可以重复使用，求找出所有的和为0且互不相同的三元组，其中[a,b,c] 与 [a,c,b] 等等认为是同一个三元组
    输入：[ -2 , -1 , 0 , 1 , 2 ]
    输出：[ [-1,0,1] , [-1,-1,2] , [1,1,-2] , [-2,0,2] , [0,0,0] ]
`
function findTriple(nums = []){
    let res = []
    let sortedArr = arr.sort((a , b)=> a - b)
    for (let i = 0,len = sortedArr.length; i<len ; i++) {
        let l = i+1
        let r = sortedArr.length - 1
        if (sortedArr[i]>0) break; //如果最小的已经是整数了，则直接跳出循环
        if (sortedArr[i] === sortedArr[i-1]) continue; //如果当前与前一个相等说明已经比较过，可以跳过

    }
}
findTriple([-1 , 1 , 0 , 2 , -2])
