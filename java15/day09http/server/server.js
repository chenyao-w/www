var http = require('http');
var url = require('url');
var qs = require('querystring');
var get = require('./httpget');
var post = require('./httppost');
http.createServer(function (req, res) {
    if(req.method=='GET'){
       get.doGet(req,res);

     }else if(req.method=="POST"){

        post.doPost(req,res);
     }else{
        res.end();
     }
    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
   
}).listen(8888);
    


console.log('Server running at http://127.0.0.1:8888/');
  
