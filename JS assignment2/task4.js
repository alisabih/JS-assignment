var sub1 = 60;
var sub2 = 65;
var sub3 = 64;
var total = 300;
var marksObtained = sub1 + sub2 + sub3;
console.log("marks = "+marksObtained);
var score = marksObtained / total * 100;
console.log("percentage = "+score + "%");

if (score >= 80){
    console.log("Grade = A-One / Excellent");
}

else if(score >= 70){
    console.log("Grade = A / Good");
}

else if(score >= 60){

    console.log("Grade = B / You need to improve");
}

else {
   console.log("Fail");
}