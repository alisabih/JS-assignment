var date = new Date();
console.log("Current Date: " +date);

var milli_s = date.getTime();
console.log("Elapsed milliseconds since January 1, 1970: " +milli_s);

var min_one_day = 24 * 60;
console.log("Minutes in one day " +min_one_day);

var min = min_one_day * milli_s;
console.log("Elapsed Minutes since January 1, 1970: " +min);
