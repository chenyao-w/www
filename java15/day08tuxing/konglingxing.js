

function x1(height,flag){
    if(flag){

	    for(var i=1;i<=height;i++){
		for(j=1;j<=height-i;j++){

		    process.stdout.write(" ");
		}
		
		  for(j=1;j<=2*i-1;j++){
		    if(j==1||j==2*i-1){     
		       process.stdout.write('*');
		    }else{
		        process.stdout.write(" "); 
		    }
		  }
		
		console.log();

	    } 
	    for(var i=1;i<=height;i++){
		for(j=0;j<=i-1;j++){
		   process.stdout.write(" ");

		}
		
		for(j=1;j<=2*(height-i)-1;j++){
		  
		   if(j==1||j==2*(height-i)-1){
		         
		   process.stdout.write('*');
		    }else{
		       process.stdout.write(" "); 

		   }
		}
		console.log();
	   }
   }else{
        for(var i=1;i<=height;i++){
		for(j=1;j<=height-i;j++){

		    process.stdout.write(" ");
		}
		
		for(j=1;j<=2*i-1;j++){
		process.stdout.write('*');

		}
		console.log();

    	} 
      for(var i=1;i<=height;i++){
		for(j=0;j<=i-1;j++){
		   process.stdout.write(" ");

		}
		for(j=1;j<=2*(height-i)-1;j++){
		   process.stdout.write('*');
		}
		console.log();
      }

    }
}
x1(6,true);
