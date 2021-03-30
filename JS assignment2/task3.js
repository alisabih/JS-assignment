console.log("task3.a");
var a = 4;
if(++a === 5){
    alert("given condition for variable a is true");
    console.log("A = " +a);
}

console.log("task3.b");
var b = 82;
if(++b === 83){
    alert("given condition for variable b is true");
    console.log("B = " +b);
}

console.log("task3.c");
var c = 12;
if(++c === 13){
    alert("condition 1 is true");
    console.log("C = " +c);
}

if(c === 13){
    alert("condition 2 is true");
    console.log("C = " +c);
}

if(c++ < 14){
    alert("condition 3 is true");
    console.log("C < " +c);
}

if(c === 14){
    alert("condition 4 is true");
    console.log("C = " +c);
}

console.log("task3.d");
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if(totalCost === laborCost + materialCost){
    alert("The cost equals");
    console.log(totalCost);
}

console.log("task3.e");
if (true){
    alert("True");
}
if (false);{
    alert("False");
    console.log("True & False");
}

console.log("task3.f");
if("car" < "cat"){
    alert("car is smaller than cat");
    console.log("car < cat");
}