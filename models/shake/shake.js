
mui.plusReady(function(){
	
	var top = document.querySelector('.top');
	var bottom = document.querySelector('.bottom');
	
	var MAX = 20
	var p = null;
	plus.accelerometer.watchAcceleration(function(a){
		console.log(JSON.stringify(a));
		if( !p && ((Math.abs(a.xAxis) + Math.abs(a.yAxis) + Math.abs(a.zAxis)) > MAX )){
			p = plus.audio.createPlayer( "../../sound/shake.wav");
			p.play(function(){
				p = null;
			});
			
			//开始图片效果
			
			top.style.webkitTransform = "translateY(-"+ top.offsetHeight/2 +"px)";
			bottom.style.webkitTransform = "translateY("+ bottom.offsetHeight/2 +"px)";
			
			setTimeout(function(){
				top.style.webkitTransform = "";	
				bottom.style.webkitTransform = "";
				
				mui.later(function(){
					mui.toast('正在搜索...');
				},200)
			},700);
			
			
			
		}
	}, function (e){
		alert("失败了"); 
	},{
		frequency:200
	});
		
});
