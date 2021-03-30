var date = new Date();
console.log(date);

var a=date.getDate();
console.log("Date = "+a);

if(a<16){
    alert("First fifteen days of the month");
}
else{
    alert("Last days of the month");
}