
var http = require('http');
var url = require('url');
var qs = require('querystring');
//var get = require('./httpget');
//var post = require('./httppost');
http.createServer(function (req, res) {
    if(req.method=='GET'){
       doGet(req,res);

     }else if(req.method=="POST"){

        doPost(req,res);
     }else{
        res.end();
     }
    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
   
}).listen(8888);
function doGet(req,res){
    var obj =qs.parse(url.parse(req.url).query);
    console.log(obj);
    //console.log(req.url);
    res.writeHead(200, {'Content-Type': 'text/HTML'});
    //for(var i=1;i<100;i++){
    //res.write('<h1>this is a test page<h1>');
    //}
    // 发送响应数据 "Hello World"
     res.write('<html>');
     res.write('<head>');
     res.write('<title>');
     res.write('</title>');
     res.write('</head>'); 
     res.write('<body>');
     res.write('<form method="post">');
     res.write('username:<input name="username">');
     res.write('password:<input name="password" type="password"><button>tijiao</button>');
     //res.write(); 
     //res.write();

     res.write('</form>');
     res.write('</body>');
     
     res.write('</html>');
   
    //res.end('Hello World\n');
     res.end();

}
function doPost(req,res){
     var formDate = '';
    req.on('data',function(data){
        formDate += data;
        //console.log(data.toString());


     });
    //console.log(req);
    //res.write("success");
    //res.end();
    req.on('end',function(){
      var obj= qs.parse(formDate);
      console.log(obj);
      res.end();
     });
    
}

console.log('Server running at http://127.0.0.1:8888/');
  
