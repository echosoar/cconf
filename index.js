process.env.TZ=  'PRC';
var fs = require("fs");
var os = require('os');
var child_process = require('child_process');
function getLog(){
	var date = new Date();
	var dayString =  [date.getFullYear(), date.getMonth()+1, date.getDate()];
	var dateString = [date.getHours() ,date.getMinutes(), date.getSeconds()];
	var fileName = dayString.join("_") + '.log';
	var content = '';
	if(fs.existsSync(fileName)){
		content = fs.readFileSync(fileName) + "\n\n";
	}
	content += "----- " + dateString.join(":") + " -----\n";
	try{
		content += " [Cpu] " + os.loadavg().toString() + "\n";
		content += " [Mem] Total: " + os.totalmem().toString() + " / Used: " + (os.totalmem() - os.freemem()) +" / Free: " + os.freemem().toString() + ' / ' +(100* (os.totalmem() - os.freemem())/os.totalmem()) +'% used' + "\n";
	}catch(e){}
	fs.writeFileSync(fileName, content);
	console.log(dateString.join(":"))
	try{
		var res = "";
		child_process.execSync("git add --all").toString();
		child_process.execSync("git commit -m 'add log "+fileName+"'").toString();
		res = child_process.execSync("git push origin master").toString();
		console.log(res);
	}catch(e){
		console.log(e);

	}
	setTimeout(getLog, Math.ceil((Math.random() * 8 + 16)*3600000));// 4*3600s 000
}
getLog();

	
	
