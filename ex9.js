const longestWord = (sentence)=>{ 
    let newString = sentence.replace(/[^a-zA-Z ]/g, "");
    let arr = newString.split(" ");
    let longestWord = arr[0];
    for (let element of arr){
        if (element.length > longestWord.length){
            longestWord = element;
        }
    }
    return longestWord
}