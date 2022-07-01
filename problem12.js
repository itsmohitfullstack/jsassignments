var N = 5343;  //Provided Number By User
var myrevvalue;
var count = 0;
for (let i = 1; i <= N; i++) {
  myrevvalue = i.toString().split("").reverse().join("");
  if (i == myrevvalue) {
    count++;
  }

}
console.log(`The Total Count of
Palindromic Number till ${N} is ${count}`)