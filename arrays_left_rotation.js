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
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);

    if( n >= 1 && n <= 100000 && k <= n && k >=1 && parseInt(n) == n && k <= 1000000){
        z = [];
        for(var i=0;i<n;i++){
            z[(n+i-k)%n] = a[i];
        }
        console.log(z.join().replace(/\,/g,' ')); 
    }   
}
