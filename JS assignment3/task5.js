var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
console.log(arr1);
console.log("Length = "+arr1.length);

var arr2 = [...new Set(arr1)];
console.log("after removing duplicates = " +arr2);
