

`

    diff算法作为虚拟dom的加速器，其算法的改进优化是react整个界面渲染的基础和性能的保障，同时也是react源码中最神
    秘的，最不可思议的地方

    1.传统的diff算法。计算一颗树形结构需要最少步zou，如果使用传统的diff算法通过循环递归遍历节点进行对比，其复杂度
    要达到O（n的三次方），其中n是节点总数。效率十分低下，假设我们要展示1000个节点，那我们就要依次执行上十亿次的比较

    付上一则简单的传统diff算法：递归实现，每次比较两个节点
    
`
//下面的这个算法 貌似复杂度也是n
//里面存储两个不同的地方以及进行怎样的修改
let result = [] 
//比较两个树相同节点的不同之处
const diffLeafs = function(beforeLeaf , afterLeaf){
    //获取较大节点树的长度
    let count = Math.max(beforeLeaf.children.length , afterLeaf.children.length)
    //循环遍历
    for (let i = 0; i < count; i++) {
        const beforeTag = beforeLeaf.children[i];
        const afterTag = afterLeaf.children[i];
        if (beforeTag === undefined) {
            result.push({type:"add",element:afterLeaf})
        }else if(afterLeaf === undefined){
            result.push({type:"remove",element:beforeTag})
        }else if(beforeLeaf.tagName !== afterLeaf.tagName){
            result.push({ type: "remove", element: beforeTag });
            result.push({ type: "add", element: afterTag });
        }else if(beforeLeaf.innerHTML !== afterLeaf.innerHTML){
            if (beforeTag.children.length === 0 ) {
                result.push({
                    type: "changed",
                    beforeElement: beforeTag,
                    afterElement: afterTag,
                    html: afterTag.innerHTML
                });
            } else {
                // 递归比较
                diffLeafs(beforeTag, afterTag);

                }        
            }
    }
    return result
}


`   

    最主要的还是层级比较
    1.虚拟dom说到底就是js对象，我们操作js对象要比操作dom性能要好很多
    2.所以我们才要使用diff算法。
        （1）tree diff 
        （2）component diff
        （3）element diff
    3.遵循先序深度优先遍历的规则。 
        此处有两个概念 分别是：深度优先遍历 广度优先遍历 深度优先遍历就是一直访问到底 而广度优先遍历就是优先访问距离根节点间的元素
        前序遍历：中左右 中序遍历：左中右 后续遍历：左右中
    4.同级比较
    5.diff只是找到了差异，找到了差异我们还有修补差异，就是打补丁（patch）
    6.然后patch打到真实的dom上（打补丁）
    react diff 的策略 就是将时间复杂度从n的三次方转化为n
`


`   
    a:不同层级的比较 

    tree diff
    基本策略一：只比较同层级的不同，这样子复杂度就编程了o（n）
    但是如果出现了跨层级的情况，并不会出现想像中的运动操作，而是会进行删除，重新创建的动作，这是一种很影响react性能的操作
    所以 官方也不建议进行dom节点跨层级的操作 可以通过css隐藏，显示节点，而不是真正地移除，添加DOM节点。
`

`
    b：组件间的比较

    component diff
    对于组件的比较，有三种策略
    （1）同一类型同一名字的两个组件，按原策略（层级比较）继续比较虚拟dom即可。
    （2）同一类型不同名字的两个组件，组件a转化为组件b时，可能虚拟dom没有任何变化，如果知道这点，用户可以通过shouldComponentUpdate（）
         来判断是否需要进行比较。
    （3）不同类型的组件，直接进行替换

    注意：如果组件D和组件G的结构相似，但是 React判断是 不同类型的组件，则不会比较其结构，而是删除 组件D及其子节点，创建组件G及其子节点。
`

`
    c:节点位于同一层级间的比较

    element diff
    插入：组件 C 不在集合（A,B）中，需要插入

    删除：（1）组件 D 在集合（A,B,D）中，但 D的节点已经更改，不能复用和更新，所以需要删除 旧的 D ，再创建新的。

    移动：组件D已经在集合（A,B,C,D）里了，且集合更新时，D没有发生更新，只是位置改变，如新集合（A,D,B,C），D在第二个，无须像传统diff，
    让旧集合的第二个B和新集合的第二个D 比较，并且删除第二个位置的B，再在第二个位置插入D，而是 （对同一层级的同组子节点） 添加唯一key进行区分，
    移动即可。

`


`
    移动的逻辑：
        比如：  旧： A：key=a    B：key=b    C：key=c    D：key=d
                新： B：key=b    A：key=a    D：key=d    C：key=c
        首先先从心中取得B，旧中的B的index为1，而新中为0，lastindex < index, 所以不移动，而A移动。以此类推，移动的逻辑只是元素向后移动
        
`