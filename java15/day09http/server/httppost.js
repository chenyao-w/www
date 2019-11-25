var qs = require('querystring');
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
exports.doPost=doPost;
