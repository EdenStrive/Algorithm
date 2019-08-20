`
    vue的双向绑定：采用的发布订阅者模式
    1.Object.defineProperty() 来实现数据劫持
        set 与 get方法进行劫持。
    2.proxy
`

`
    极简版的双向绑定
`
const obj = {};
Object.defineProperty(obj, 'text', {
  get: function() {
    console.log('get val');emsp;
  },
  set: function(newVal) {
    console.log('set val:' + newVal);
    document.getElementById('input').value = newVal;
    document.getElementById('span').innerHTML = newVal;
  }
});

const input = document.getElementById('input');
input.addEventListener('keyup', function(e){
  obj.text = e.target.value;
})
