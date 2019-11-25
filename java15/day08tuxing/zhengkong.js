
function zheng(bian=8,sys='*',flag=true){
  var a = ' ';
  for(i=1;i<bian;i++){

        for(j=1;j<bian;j++){
	  if(flag){	
            a+=sys;
	    a+= ' ';	  
	  }else{
	      
	    if(i==1||i==bian-1||j==1||j==bian-1){
	    a+=sys;
            a+=' ';  
            }else{
               a+= '  ';
	    }    
	  }
       
	}
	
	console.log(a);
	   a=' ';

  } 

}
zheng();
