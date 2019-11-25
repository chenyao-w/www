
function san (S=10){
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

}
san();
