mui.plusReady(function() {
	
	var parentWv = plus.webview.currentWebview(); 
	
	var pageList = [{
			url: '../message/message.html',
			id: 'message'
		},
		{
			url: '../mine/mine.html',
			id: 'mine'
		},
		{
			url: '../address-book/address-book.html',
			id: 'address-book'
		},
		{
			url: '../discover/discover.html',
			id: 'discover'
		}
	];
	
	for(var i = 0; i < pageList.length; i++) {
		var url = pageList[i].url;
		var id = pageList[i].id;
		
		//如果Wv已经创建则跳出循环
		if(plus.webview.getWebviewById(id)){
			continue;
		}
		
		var newWv = plus.webview.create(url, id, {
			//开始创建webView 
			bottom: '50px',
			top: '44px',
			popGesture: 'none'
		});

		//只显示第一个
		i == 0 ? newWv.show() : newWv.hide();
		
		//把子wenView 追加都父webview  相当于层叠上去
		parentWv.append(newWv);
	}
	
	//默认显示的子页面id
	var showWv = 'message';
	
	mui('.mui-bar').on('tap','.mui-tab-item',function(e){
		//隐藏当前显示的webView
		//显示点击的WebView
		if(showWv == this.dataset.id){
			return;
		}
		plus.webview.getWebviewById(showWv).hide();
		showWv = this.dataset.id;
		plus.webview.getWebviewById(showWv).show('none',0,function(){
			//触发webView界面定义的showPage事件
			mui.fire(plus.webview.getWebviewById(showWv),'showPage');
		});
	});


});

