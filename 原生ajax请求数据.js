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

`