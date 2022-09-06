const divideOrHasSeven = (start,end)=>{ 
    let count = 0;
    for (start;start<end;start++){
        if (start%7==0){
            count++;    
        } else {
            let startString = start.toString();
            //console.log(startString);
            for (let x=0;x<startString.length;x++) {
                if (startString[x]==7){
                    count++;
                }
            }
        }
    }
    return count
}
