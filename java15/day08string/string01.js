function x1(a){

   var str = a;
   var len = 0;
   var a = 0;
   var flag =true;
   while(flag){
      if(str[len]!=undefined){
           a+=1;
           len+=1;
       }else{
        flag =!flag;
       }

         

   }
    console.log('字符串长度为'+a);




}
x1('wadfghu');
