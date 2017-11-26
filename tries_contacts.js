process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    var str = ';';
    var result = '';
    var indexTable = {};
 
 // Source http://codegists.com/snippet/javascript/tries-contactjs_tennisonchan_javascript
	for(var a0 = 0; a0 < n; a0++){
		var op_temp = readLine().split(' ');
		var contact = op_temp[1];
		
		if (op_temp[0] == 'add') {
		  indexTable[contact[0]] = indexTable[contact[0]] || '';
		  indexTable[contact[0]] += ';' + contact;
		} else {
		  var table = indexTable[contact[0]] || '';
		  result += table.split(';' + contact).length - 1 + '\n';
		}
	}
 
    console.log(result);
    
    /*
    test 2
    for(var a0 = 0; a0 < n; a0++){
        var op_temp = readLine().split(' ');
        if(op_temp[0] == 'add'){
           str += op_temp[1]+';';
        }else{
           res += str.split(';'+op_temp[1]).length-1+'\n';
        }
        
    }
    console.log( res );
    */
    
    
    /*
    test 1
    for(var a0 = 0; a0 < n; a0++){
        var op_temp = readLine().split(' ');
        var arr = [];
        var res = 0;
        if(op_temp[0] == 'add'){
            arr.push(op_temp[1]);
        }else{
           var k = 0;
           var len = arr.length;
           for(var i=0;i<len;i++){
               if( arr[i].indexOf(op_temp[1]) > -1 )   k++;
           }
           res = res + k + '\n';
        }
        
    }*/
    

}
