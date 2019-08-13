`
    h5新标签：其实就增加了很多语义化标签
        header  footer  nav  article  aside  progress（进度条）  section（定义文档中的区段区域）
        video audio iframe 
`

`
    dom获取元素的方式：
        1.通过id （getElementById）
        2.通过name （getElementsByName） eg: <input name = "xxx">
        3.通过标签名（getElementByTagName） eg: a标签啥的
        4.通过类名 （getElementByClassName） eg: class = "xxx"
        5.获取html （document.documentElement） 
        6.获取body （document.body）
        7.querySelector  eg: 可通过类名获取或者通过id 标签名 还有一个
        8.querySelectorAll
`

`
    dom如何添加元素，怎么获取兄弟元素，父元素：
        创建：createElement('div')
        添加：appendChild(element)   .insertBefore(insertdom，chosendom)
        var a = document.getElementById("dom"); 
        del_space(a); //清理空格 
        var b = a.childNodes; //获取a的全部子节点； 
        var c = a.parentNode; //获取a的父节点； 
        var d = a.nextSibling; //获取a的下一个兄弟节点 
        var e = a.previousSibling; //获取a的上一个兄弟节点 
        var f = a.firstChild; //获取a的第一个子节点 
        var g = a.lastChild; //获取a的最后一个子节点 
`

`
    队列（先进先出）：从前面添加 unshift，从后面删除pop    从后面添加push，从前面删除shift（数据结构是从后面进前面出）
    栈（先进后出）：先进后出，push进栈，pop出栈
`
`
    typeof、Object.prototype.toString.call()、instanceof的区别
`