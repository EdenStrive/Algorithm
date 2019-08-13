//首先它的兼容问题：pc是ie完全不支持，并不是老版ie不支持，是所有ie都不支持。但是手机/平板电脑兼容性还算可以。
`
  坑：
    并不是所有的浏览器都支持这个fetch，需要做兼容处理，一般是使用 polyfill es6-promise 因为是基于promise的
    缺少ajax一些底层的api，比如 onabort 取消请求的这个方法
    fetch 请求默认是不带cookie的，是需要设置 fetch( url , {credentials: "include" } )
    服务器返回400，500错误码时并不会reject，只有网络错误这些导致请求不能完成时，fetch才会被 reject。
    
  ie中使用 fetch：

`

fetch('http://119.29.183.36:5000/count') //get 请求
  .then(response => response.json()) 
  `
    返回的是一个response，里面有ok、status等字段来显示是否请求成功。我们需要对response进行转换，return返回的都是一个promise对象，紧接着就可以再用then进行读取 
    比如response.json就是来转换数据为json格式的还有text为xml格式等,但是在读取数据流的时候只能使用一种，读取数据流的过程 只能读取一次，一旦读取，数据流就会变空
    再次读取时就会报错
    fetch不支持jsonp progress（进度条显示）

  `
  .then(data => {
    // data就是我们请求的repos
    console.log(data)
});


let content = {some: 'content'};
// The actual fetch request
fetch('some-url', {
  method: 'post',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(content)
})
// .then()...


//处理异常
fetch('https://api.github.com/users/chrissycoyier/repos')
  .then(response => response.json())
  .then(data => console.log('data is', data))
  .catch(error => console.log('error is', error));

fetch('https://api.github.com/users/chrissycoyier/repos')
.then(response => {
  if (response.ok) {
    return response.json()
  } else {
    return Promise.reject('something went wrong!')
  }
})
.then(data => console.log('data is', data))
.catch(error => console.log('error is', error));



//带有options发送一个请求 默认是get请求
let options = {

  method:"GET",

  headers:{
    'Content-Type': 'application/json;charset=UTF-8', 
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  },

  credentials:"include", //这个字段就是每次都发送资源本地的cookies 验证信息 fetch默认是不发送这个cookie的

  mode: 'cors', //cors no-cors等等 same-origin navigate

  cache: 'default' //default就是从http缓存中寻找匹配的请求，no-store：真正的不缓存 no-cache：如果存在缓存，就发送查询缓存是否为最新的请求进行验证 匹配

}

fetch("http://119.29.183.36:5000/count",{options})
