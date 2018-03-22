document.addEventListener('showPage',function(){
	
	var header = document.querySelector('header.mui-bar');
	var list = document.getElementById('list');
	
	//calc hieght
	list.style.height = (document.body.offsetHeight) + 'px';
//	list.style.height = (document.body.offsetHeight - list.offsetHeight) + 'px';

	//create
	window.indexedList = new mui.IndexedList(list);
});
