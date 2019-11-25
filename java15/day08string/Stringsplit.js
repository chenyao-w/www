function x1(a,b){
   var arr = new Array();
   var flag=true;
   var len =0;
   var index =0;
   var str = '';
   while(flag){
    if(a[len] != undefined){
      if(a[len] == b){
	 arr[index] = str;
         index += 1;
         str =''; 
       }else{
	str += a[len];
        
       
       }   
      
     }else{

      flag =!flag;
     }
     len+=1;
   }
   var lens=0;
console.log(arr);
   while(arr[lens]!=undefined){
       console.log('下标'+lens+'的值为'+arr[lens]);
       lens+=1;
   }
}
x1('123,abc,def,ew,yuuq,rjk' ,',');
