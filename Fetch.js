//首先它的兼容问题：pc是ie完全不支持，并不是老版ie不支持，是所有ie都不支持。但是手机/平板电脑兼容性还算可以。


fetch('http://119.29.183.36:5000/count') //get 请求
  .then(response => response.json()) //返回的是一个response，里面有ok、status等字段来显示是否请求成功。我们需要对response进行转换，return返回的都是一个promise对象，紧接着就可以再用then进行读取 比如response.json就是来转换数据为json格式的还有text为xml格式等
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


