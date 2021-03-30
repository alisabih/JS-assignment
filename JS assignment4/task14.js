var date = new Date();
console.log(date);

var hour = date.getHours();
console.log("current hour: "+hour);

var set = date.setHours(18); // here you put one hour less from current hour
console.log(date);