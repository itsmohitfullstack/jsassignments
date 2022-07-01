var array = [11,222,21,21,21,3232,43,54,5,5,6,6];
var newarr = [];
for(let i = 0; i<=array.length; i++){
    if(array[i] != array[i+1]){
       newarr.push(array[i]) 
       newarr.sort(function(a, b){return a - b}); // sorting array in increasing order
       newarr.reverse();  //priting in decreasing order
    }
}
console.log(newarr)
  