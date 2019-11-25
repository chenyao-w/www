var a="";
      for(i=0;i<6;i++){
        for(j=6;j>i;j--){
           a+=' ';
        }
         for( k=0;k<2*i+1;k++){
         a+="*";
         }
         a+="\n";
      }



for(i=5;i>0;i--){
        for(j=6;j>=i;j--){
           a+=' ';
        }
         for( k=0;k<2*i-1;k++){
         a+="*";
         }
         a+="\n";
      }
 console.log(a);
