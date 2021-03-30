var secretNum = 6;
var num = parseInt(prompt("Please enter number from 1 to 10"));
if (num === secretNum){
   alert("Bingo! Correct answer");
}
else if (num === 7){
    alert("close enough to the correct answer");
}
else {
   alert("Try again");
}