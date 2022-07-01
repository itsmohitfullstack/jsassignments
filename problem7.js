var N = 18;  // Provided Number
var end = N*3;  
var series = 0;
var array = []; // For Storing Series
if(N<=0){
 console.log("error");

}
else{

for(let i = 0; i<=end; i++){
 if(i%2 != 0){
   series = series + i;
   array.push(series);
 }
}

console.log(`The Number At ${N} position of the series is ${array[N]}`);

}