var net = require('net');
var clientList =[];
var server = net.createServer(function(socket){
     clientList.push(socket);
     socket.write('success\r\n');
     //socket.pipe(socket);
     socket.on('data',function(data){
         console.log(data.toString());
         //socket.write(data);
         broadcast(data);
     });

     socket.on('end',function(){
           socket.write("end");

     });
   

});
function broadcast(data){
   for(var i=0;i<clientList.lenght;i++){
      clinetList[i].write(data);
   }

}
server.listen(8000,'127.0.0.1');
