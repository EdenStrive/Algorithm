const obj = {
    id: 1,
    name:'张三',
    age:18,
    1:2
}

//第一种方法
for (const key in obj) {
    // console.log(key+"----"+obj[key])
}

//第二种方法
// console.log(Object.keys(obj))
// console.log(Object.values(obj))

//第三种方法
// console.log(Object.getOwnPropertyNames(obj))
//最常用的用还是for in吧


//是下面的acess对象转换为Result对象，
let acess = [
    {
      id: 1,
      name: "1"
    },
    {
      id: 2,
      name: "2"
    },
    {
      id: 3,
      name: "3"
    },
    {
      id: 5,
      name: "245",
      parent: 4
    },
    {
      id: 6,
      name: '6'
    },
    {
      id: 4,
      name: "24",
      parent: 2
    }
  ]
  
  const generate = arr => {
    let res = []
    arr.sort((a, b) => a.id - b.id) //先使用sort进行排序
    console.log(arr)
    for (let i = arr.length - 1; i >= 0; i--) {
      if (!arr[i].parent) {
        res.unshift(arr[i])  //unshift
      } else {
        let currentValue = arr[arr[i].parent - 1]
        let obj = {
          id: arr[i].id,
          name: arr[i].name,
          children: arr[i].children
        }
        if (!arr[i].children) delete obj.children
        if (currentValue.children) {
          currentValue.children.unshift(obj)
        } else {
          currentValue.children = [obj]
        }
        arr[arr[i].parent - 1] = currentValue
      }
    }
    return res
  }
  
  console.log(generate(acess))
  
  let Result = [
    {
      id: 1,
      name: "1"
    },
    {
      id: 2,
      name: "2",
      children: {
        id: 4,
        name: "24",
        children: {
          id: 5,
          name: "245"
        }
      }
    },
    {
      id: 3,
      name: "3"
    },
    {
      id: 6,
      name: "6"
    }
  ]
//首先进行排序 然后再进行循环 判断 push

