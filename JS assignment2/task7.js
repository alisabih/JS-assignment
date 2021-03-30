var sign       = prompt("enter  +  -  *  /  or  %  sign");
var firstNum   = Number(prompt("enter first num"));
var secondNum  = Number(prompt("enter second num"));
var operation1 = firstNum + secondNum;
var operation2 = firstNum - secondNum;
var operation3 = firstNum * secondNum;
var operation4 = firstNum / secondNum;
var operation5 = firstNum % secondNum;

if(sign === "+"){
    operation1 = firstNum + secondNum;
    alert("Addition = "+operation1);
    console.log("Addition = "+operation1);
}

else if(sign === "-"){
    operation2 = firstNum - secondNum;
    alert("Subtraction = "+operation2);
    console.log("Subtraction = "+operation2);
}

else if(sign === "*"){
    operation3 = firstNum * secondNum;
    alert("Multiplication = "+operation3);
    console.log("Multiplication = "+operation3);
}

else if(sign === "/"){
    operation4 = firstNum / secondNum;
    alert("Division = "+operation4);
    console.log("Division = "+operation4);
}

else if(sign === "%"){
    operation5 = firstNum % secondNum;
    alert("Modulus = "+operation5);
    console.log("Modulus = "+operation5);
}