//一个镜像对称二叉树 现在需要判断这个二叉树是否对称
let tree = {
    value:1,
    left:{
        value:2,
        left:{
            value:3,
            left:{
                value:6,
                left:null,
                right:null
            },
            right:null
        },
        right:{
            value:12,
            left:null,
            right:null
        }
    },
    right:{
        value:2,
        left:{
            value:12,
            left:null,
            right:null
        },
        right:{
            value:3,
            left:null,
            right:{
                value:6,
                left:null,
                right:null
            }
        }
    }
}
//存在bug
function isSymmetry(leftTrees,rightTrees){
        //对比左右两子树的是否为对称
        let leftTree = leftTrees
        let rightTree = rightTrees
        //两个相对应的节点是否相等。
        if (leftTree == null && rightTree == null) {
            return true
        }
        if (leftTree.value !== rightTree.value) {
            return false
        }
        //两个子树的左右节点都为null，那么该部分就是镜像对称
        if ( leftTree.value == rightTree.value && leftTree.left==null && leftTree.right==null && rightTree.left==null && rightTree.right==null) {
            return true
        }
        if ((leftTree.left == null && rightTree.right !== null)||(leftTree.left !== null && rightTree.right == null)) {
            return false
        }
        if ((leftTree.right == null && rightTree.left !== null)||(leftTree.right !== null && rightTree.left == null)) {
            return false
        }

        return isSymmetry(leftTree.left , rightTree.right) && isSymmetry(leftTree.right , rightTree.left)

}

function partOne(tree) {
    if (tree.left !== null && tree.right !== null) {
        return isSymmetry( tree.left , tree.right )
    }else{
        return true
    }
}

console.log(partOne(tree))



// 养成写return 的好习惯，尤其是在进行递归的时候 , console.log 打印只能打印出函数return回来的东西，如果回调没有写return ，那就打印不出来，除非在函数内部进行打印
//js为单线程，无论在函数内部何处return ，函数都会停止对下的执行 无论函数内部在何处 无论函数内部何处return，函数都会停止对下的执行 无论函数内部在何处return，函数都会停止对下的执行
// function returnx(){
//     if (1 == 1) {
//         if (2 == 2) {
//             return "111"
//         }
//     }
//     console.log(2)
// }
// console.log(returnx())