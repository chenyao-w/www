function x1(str,a,b){
   var str1 = '';
   for(i=0;i<str.length;i++){
      if(i>=a&&i<=b){
        str1 += str[i];
      }
      if(i>b){
        console.log(str1);
        break;
      }

   }


}
x1('qwertyu',2,4);
