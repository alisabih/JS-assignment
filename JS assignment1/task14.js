var a = 2; // 1

var b = 1; // 0 // 1 // 0

var result = --a - --b + ++b + b--;
// result  =  1  -  0  +  1  +  1 = 3
console.log(a);
console.log(b);
console.log(result);