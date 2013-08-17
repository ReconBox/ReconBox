// Server running commands

var servproc, pipeInServSource, pipeOutServSource, pipeErrServSource;

function doIncrement(increment) {
	var wid = parseInt(document.getElementById('loadbar').style.width);
	document.getElementById('loadbar').style.width= (wid + increment) +'%';
}

function runServer(){
	servproc = Ti.Process.createProcess({
		args: ['bash', Ti.API.application.resourcesPath + '/serverlaunch.sh', '-f'],
		stdin: pipeInServSource,
		stdout: pipeOutServSource,
		stderr: pipeErrServSource
	});

	
	servproc.setOnReadLine(function(data){
		console.log("SERVER OUTPUT:" + data);
		if(parseInt(document.getElementById('loadbar').style.width) < 100){
			if(data.indexOf('sourceok') != -1){
				doIncrement(20);
				document.getElementById('loadbar').innerHTML = "<span>Sources activated!</span>";
			}else if (data.indexOf('djangok') != -1) {
				doIncrement(20);
				document.getElementById('loadbar').innerHTML = "<span>Sources activated! Django ENV set!</span>";
			}else if (data.indexOf('serverok')){
				doIncrement(30);
				document.getElementById('loadbar').innerHTML = "<span>Sources activated! Django ENV set! Server up & running!</span>";
			}
		}

	});
	

	servproc.launch();
}