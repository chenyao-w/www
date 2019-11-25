function fenge(str, sym) {
	var arr = new Array;
	var newstr = '';
	var x = 0;
	for(var i = 0; i < str.length; i ++){	
                //存放匹配字符串；
		var strs = '';
		var k = i;

		for(var j = 0; j < sym.length; j ++) {
			if(str[k] == sym[j]){
				strs += str[k++];
				if(strs == sym){
					arr[x] = newstr;
					i = i + sym.length - 1;
					console.log(i)
					newstr = '';
					x++;				
				}
				
			}else{
				newstr += str[i];
				break;
			}			
		}
		if(i == str.length - 1){
			console.log(newstr)
			arr[x] = newstr;
			newstr = '';
			x++;
		}
	}
	console.log(arr)
}
fenge('ab,cccddd', 'ab,');
