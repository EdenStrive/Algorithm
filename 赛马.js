`
    1.样例输入输出都是字符串，当获取整行数据时，得到的也是字符串类型，转化为数组时，需要使用
    string.split(" ")  最后对数组进行操作 :这里数组里面的数字都是字符串类型，相加的时候并不会产生运算，需要对每个数字进行Number()再进行运算
    输出时也要对数组进行join（“ ”）转化为字符串
`

`
    单行读取
`
    let arr = read_line().split(' ')
    let value = Number(arr[0]) + Number(arr[1])
    print(value)


`
    1 2
    3 4
    5 6

    3
    7
    11
`

var a, b;
var solveMeFirst = (a,b) => a+b;
//此处还有获取浮点型 readDouble()
while((a=readInt())!=null && (b=readInt())!=null){
    let c = solveMeFirst(a, b);
    print(c);
}