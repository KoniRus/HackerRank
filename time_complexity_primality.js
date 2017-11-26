/**
 * Bogmolov Vladilslav
 */
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
    var p = parseInt(readLine());
    for(var a0 = 0; a0 < p; a0++){
        var find = false;
        var n = parseInt(readLine());
        if(n == 1){
           console.log('Not prime');
        }else{
            for(var i=2;i<n-1;i++){
                if(n%i==0){
                    find = true;
                    break;
                }           
            }
            if( find === true ){
                console.log('Not prime');
            }else{
               console.log('Prime'); 
            }
        }
    }    
}
