mui.plusReady(function(){
	var filter = [plus.barcode.QR];
	var bc2 = new plus.barcode.Barcode( "bcode", filter);
	
	bc2.start();
	
	
	void bc2.onmarked = function ( type, code, file ) {
	// loaded code 
	}

	
});
