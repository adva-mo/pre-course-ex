const biggestNumber = (a,b,c)=>{
    var biggest = a;
    biggest = (a>b)?a:b;
    biggest = biggest>c?biggest:c;
    return biggest 
   }