/**
 * Bogmolov Vladilslav
 */
function processData(input) {
    //Enter your code here
    var arr = [];
    var data = input.split("\n");
    for(var i=0;i<data.length;i++){
        switch(data[i].split(" ")[0]){
            case '1':
                arr.push( data[i].split(" ")[1] );
                break;
            case '2':
                arr.shift();
                break;
            case '3':
                console.log(arr[0]);
                break;
        }
        
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
