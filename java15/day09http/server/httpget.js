
function doGet(req,res){
    //var obj =qs.parse(url.parse(req.url).query);
    //console.log(obj);
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
exports.doGet=doGet;
