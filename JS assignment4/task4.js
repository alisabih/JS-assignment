var input = prompt("Please enter valid Email address");
console.log(input);

var email = /^[a-z0-9]{1,}@[a-z]{1,}[.]{1}[a-z]{3}$/;

if(input.match(/[a-z]{1,}@[a-z]{1,}[.]{1}[a-z]{3}/)){
    alert("not only string & num should be at last");
}

else if(input.match(email)){
    alert("valid");
    
}

else {
    alert("enter valid email");
}