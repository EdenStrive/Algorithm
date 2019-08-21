`
    获得指定参数的名字
`
function getQueryString(name){
	var r, reg;
    reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    //这里的RegExp就是相当于下面的正则，可以通过上面的方式进行创建正则表达式
    regs = /(^|&)id=([^&]*)(&|$)/i
	r = window.location.search.substr(1).match(regs);
	if (r !== null) {
		return r[2]; //不解码
	}
	return  null;
};
getQueryString("id")