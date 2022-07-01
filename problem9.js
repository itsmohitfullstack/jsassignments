 var discriminant;
 var root1;
 var r00t2;
 var a = 1; b=5; c=6;

   discriminant = b * b - 4 * a * c;
   
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        console.log(`roots of given quadratic are ${parseInt(root1)} & ${parseInt(root2)}`)