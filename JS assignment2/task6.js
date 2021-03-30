var num = parseInt(prompt("Please enter number"));
var isOdd = true;
for(var i = 2; i < num; i++){
    var result = num % i;
    if(result == 0){
        console.log("Even Number = "+num+" I "+i);
        isOdd = false;
        break;
    }
}
if(isOdd){
    console.log("Odd Number = "+num+" I "+i);
}