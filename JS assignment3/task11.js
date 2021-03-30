var A = ["Cake","apple pie","cookie","chips","patties"];
console.log(A);

var B = prompt("Welcome to ABC Bakery,What do you want to order sir/ma'am?","Cake");
console.log("search by user input = " +B);

if(B === A[0]){
    alert(A[0]+" is available at index 0 in our bakery");
    
}

else if(B === A[1]){
    alert(A[1]+" is available at index 1 in our bakery");
}

else if(B === A[2]){
    alert(A[2]+" is available at index 2 in our bakery");
}

else if(B === A[3]){
    alert(A[3]+" is available at index 3 in our bakery");
}

else if(B === A[4]){
    alert(A[4]+" is available at index 4 in our bakery");
}

else {
    alert("We are sorry.this is not available in our bakery");
}