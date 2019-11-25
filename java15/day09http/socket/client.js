var net = require('net');
var hostname = process.argv[2];
var port = process.argv[3];
console.log(process.argv)
var client = net.connect({host:hostname,port:port},
function(){
  console.log('connected to server');
  process.stdin.setEncoding('utf8');
  process.stdin.on('readable',function(){
    var chunk = process.stdin.read();
    console.log(chunk)
    if(chunk !== null){
        console.log('data:' + chunk);
        client.write('data:' + chunk);
        //console.log(client);
    }

  });
});

client.on('data',function(data){
	console.log(data.toString());
});

client.on('end',function(){
  console.log('disconnected from server');
});
