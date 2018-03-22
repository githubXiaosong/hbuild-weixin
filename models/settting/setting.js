mui('body').on('tap', '.mui-popover-action li>a', function() {
		var a = this,
			parent;
		//根据点击按钮，反推当前是哪个actionsheet
		for (parent = a.parentNode; parent != document.body; parent = parent.parentNode) {
			if (parent.classList.contains('mui-popover-action')) {
				break;
			}
		}
		//关闭actionsheet
		mui('#' + parent.id).popover('toggle');
//		alert(a.innerHTML);
	})