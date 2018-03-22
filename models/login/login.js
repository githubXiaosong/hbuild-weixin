//初始化框架
mui.init();

document.getElementById('btn-login').addEventListener('tap', function() {

	//	获取到用户输入的到的账号和密码
	var usernameInput = document.querySelector('input[name="username"]');
	var passwordInput = document.querySelector('input[name="password"]');
	var usernameVal = usernameInput.value;
	var passwordVal = passwordInput.value;
	//非空校验
	if(!usernameVal || !passwordVal) {
		mui.toast("用户名或者密码不能为空");
		return;
	}


	mui.ajax('https://ucowoclx.api.lncld.net/1.1/login', {
		data: {
			username: usernameVal,
			password: passwordVal
		},
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
		timeout: 5000, //超时时间设置为10秒；
		headers: {
			'Content-Type': 'application/json',
			'X-LC-Id':'UcOwoclxPCRsWntsaYFdIXS6-gzGzoHsz',
			'X-LC-Key': 'uQAcSBgREiymWh6cKS4Qhk8d'
		},
		success: function(data) {
			localStorage.setItem('sesstionToken',data.sessionToken);
			localStorage.setItem('username',data.username)
			mui.toast("登录成功");
			mui.later(function(){
				mui.openWindow('../main/main.html', 'main');				
			},1000);
			//服务器返回响应，根据响应结果，分析是否登录成功；
		},
		error: function(xhr, type, errorThrown) {
			//异常处理；
			mui.toast("用户名或密码错误");
//			console.log(type);
		}
	});

});