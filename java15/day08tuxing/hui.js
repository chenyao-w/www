
function x1(a,b,c){
         for(var i=0; i<a; i++){
            for(var j=0; j<a; j++){
              if(0 == i||(a-1) == i ||   ((2 == i || (a-3) == i) && (j >=2 && j <= (a-3)) ) )  {
                process.stdout.write(b+' ');
               }
              else{
                 if(j==0||j==(a-1) ||   ((j == 2 || j == (a-3)) && (i >=2 && i <= (a-3)))    ){
                 process.stdout.write(b+' ');
                 }else{
                 process.stdout.write("  ");
                }
              }
              }
                   console.log();

          }
      
}
x1(14,"*","x");

