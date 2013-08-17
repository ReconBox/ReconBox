// servers will be startd with this script

var currentWindow, mainWindow;

function doIncrement(increment) {
	var wid = parseInt(document.getElementById('loadbar').style.width);
	document.getElementById('loadbar').style.width= (wid + increment) +'%';
}



function launch(){
	//pbar.style.width = 100;
	runServer();
	setTimeout(function(){
		startElastic();
	}, 8000);
	setTimeout(function(){
		
		currentWindow = Ti.UI.currentWindow;
		mainWindow = currentWindow.createWindow("http://localhost:8000");
		Ti.UI.currentWindow.hide();
		mainWindow.open();
		
		//Ti.UI.createWindow("http://localhost:8000").open();
	}, 12000);
}