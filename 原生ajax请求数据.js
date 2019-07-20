var xmlhttp;

function loadXMLDoc(url,cfunc){
    if (window.XMLHttpRequest){
        // IE7+, Firefox, Chrome, Opera, Safari 代码
        xmlhttp=new XMLHttpRequest();
    }else{
        // IE6, IE5 代码
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=cfunc;
    xmlhttp.open("GET",url,true);
    xmlhttp.send();
}


function myFunction(){
	loadXMLDoc("http://119.29.183.36:5000/newA",function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			console.log(xmlhttp.responseText);
		}
	});
}
myFunction()

`
    1.ajax：异步 JavaScript 和 XML
    2.原理：XMLHttpRequest一开始只是微软浏览器提供的一个接口，后来各大浏览器纷纷效仿也提供了这个接口，再后来W3C对它进行了标准化，提出了XMLHttpRequest标准。ajax的原理简单的讲：就是通过XMLHttpRequset对象来向服务器发送请求，进行http通信，从而获得数据
    3.封装一个自己的ajax
`
//自己封装一个简单的ajax
function myAjax( url, func, data ){
    let xmlhttp
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest()
    }else{
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
    }
    xmlhttp.onload = e =>{
        // console.log(`请求成功的回调：${e} ${xmlhttp.responseText}`)
        let data = {
            id:1,
            data:xmlhttp.responseText
        }
        xmlhttp.onreadystatechange= func(data)
    }
    xmlhttp.onloadend = e =>{
        console.log(`请求结束时的回调：${e}`)
    }
    xmlhttp.onerror = e =>{
        console.log(`请求出错的回调：${e}`)
    }
    xmlhttp.ontimeout = e =>{
        console.log(`请求超时的回调：${e}`)
        let data = {
            id:4,
            data:"请求超时啦，请您稍后重试"
        }
        func(data)
    }
    //设置超时时间
    xmlhttp.timeout = 8000
   
    //此处判断是否存在第三个参数，也就是判断是get请求还是post请求
    if (arguments[2]) {
        xmlhttp.open("POST" , url , true)

        //设置请求头部，此处应该放在open下面
        xmlhttp.responseType = '';
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
    
        xmlhttp.send(arguments[2])
    }else{
        xmlhttp.open("GET" , url , true)

        //设置请求头部，此处应该放在open下面
        xmlhttp.responseType = '';
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 

        xmlhttp.send(null)
    }
}


myAjax("http://119.29.183.36:5000/newA",function(data){
   switch (data.id) {
       case 1:
           alert("请求成功")
           break;
       case 4:
           alert(data.data)
       default:
           break;
   }
})