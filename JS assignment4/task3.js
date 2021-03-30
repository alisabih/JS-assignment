var input = prompt("Password should be Alphanumeric & alphabet comes first");
console.log(input);

var num = /[0-9]/;
var letter = /[a-z]/g;

if(input.length != 8){
    alert("8 characters required");
    
} 

 else if(input.slice(0,7) >= 0){
    alert("Error,all num");
}

else if(input.slice(0,4).match(letter) && input.slice(5,8).match(num)){
    alert("Correct");
}

else{
    alert("Wrong password");
}