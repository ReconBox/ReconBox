// General logic for elastic search

var elastic, pipeInElastic, pipeOutElastic, pipeErrElastic;

function doIncrement(increment) {
	var wid = parseInt(document.getElementById('loadbar').style.width);
	document.getElementById('loadbar').style.width= (wid + increment) +'%';
}

function startElastic(){
	elastic = Ti.Process.createProcess({
		args:['exec', 'bash',Ti.API.application.resourcesPath + "/elasticsearch/bin/elasticsearch", '-f'],
		stdin: pipeInElastic,
		stdout: pipeOutElastic,
		stderr: pipeErrElastic
	});

	elastic.setOnReadLine(function(data){
		console.log('ELASTICSEARCH: ' + data);
		if(parseInt(document.getElementById('loadbar').style.width) < 100){
			if(data.indexOf('started') != -1) {
				doIncrement(30);
				document.getElementById('loadbar').innerHTML = "<span>Sources activated! Django ENV set! Server up & running! ElasticSearch started!</span>";
			}
		}
	});

	elastic.launch();
}