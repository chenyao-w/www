
function san (S,flag){
   var a = ' ';
   for(i=1;i<S;i++){
	//实心    
     if(flag){	   
       
	 var a = ' ';
        for(i=1;i<S;i++){


        for(j =S-1-i;j>0;j--){
        a+=' ';


        }

	   
	  if(i>3){ 
	   for(j=i;j>0;j--){
           a+='* ';
        
       
	}
	  }
	console.log(a);
	   a=' ';

      }

     }else{
     //空心
        if(i==4||i==S-1){
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
             if(i>4){
	     for(j=i;j>0;j--){
               if(j==i||j==1){
	         a+='* ';
	       }else{     
	         a+='  ';
	       }    
	      }	    
             }       
       } 
     
     
     }

	console.log(a);
	   a=' ';

   }

}
san(10,false);
