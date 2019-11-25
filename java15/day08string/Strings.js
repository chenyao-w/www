function x1(a,b){
  var str = '';
  var index = 0;
  var flag = true;
  var len = 0;
 while(flag){
   if(index<a.length-1){
     if(a[index]!= undefined){
       str += a[index];
       str += b;
       index += 1;

      }   


    else{
      flag = !flag;
    }
   }else{
      str += a[index];
      flag = !flag;
   }
 }
 console.log(str);
}
var arr = ['abc','def','sfa','afag','325','sfds','afa'];
x1(arr,'###');
