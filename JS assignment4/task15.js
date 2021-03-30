var ask = parseInt(prompt("enter your age"));

var date = new Date();
console.log("current Date is: " +date);

var year = date.getFullYear();
console.log("current Year: " +year);

var user = year - ask;
alert("Your age is " +ask + " & Your Birth Year is " +user);
console.log("user Birth Year is: "+ user);