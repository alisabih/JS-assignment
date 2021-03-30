var pass = "hello";
var password = prompt("enter password");

if(password === pass){
    alert("Correct! The password you entered matches the original password");
    console.log(password===pass);
}

if (password == null){
    alert("Please enter your password");
    console.log(password==null)
}

else if(password != pass){
    alert("Incorrect password");
    console.log(password!=pass);
}