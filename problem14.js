var array = [1, 2, 3, 4, 5, 6, 7];  //user provided input
var l1 = parseInt(array.length / 2);
var l2 = array.length;
var array3 = [];
newarr1 = array.slice(0, l1);
newarr2 = array.slice(l1, l2);
array3 = newarr2.concat(newarr1);
console.log(`The left rotated array is [${array3}] `)  