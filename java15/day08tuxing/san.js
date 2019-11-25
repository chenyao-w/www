
function san (S,flag){
   var a = ' ';
   for(i=1;i<S;i++){
	//实心    
     if(flag){	   
        for(j =S-1-i;j>0;j--){
        a+=' ';
        }
        for(j=i;j>0;j--){
        a+='* '; 
	}
     }else{
     //空心
        if(i==1||i==2||i==S-1){
          for(j =S-1-i;j>0;j--){
          a+=' ';
          }
          for(j=i;j>0;j--){
          a+='* ';
         }

       }else{
            for(j =S-1-i;j>0;j--){
            a+=' ';
            }
	    for(j=i;j>0;j--){
            if(j==i||j==1){
	     a+='* ';
	    }else{     
	       a+='  ';
	    }    
	   }	    
       
       } 
     
     
     }

	console.log(a);
	   a=' ';

   }

}
san(10,false);
