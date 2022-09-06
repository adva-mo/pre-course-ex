const getWordByNumber = (num)=>{ 
    let message="";
    if (num == 9){
      message = "nine";
    } else if (num == 8){
      message = "eight";
    } else if (num == 7){
      message = "seven";
    } else if (num == 6){
      message = "six";
    } else if (num == 5){
      message = "five";
    } else if (num == 4){
      message = "four";
    } else if (num == 3){
      message = "three";
    } else if (num == 2){
      message = "two";
    } else if (num == 1){
      message = "one";
    } else if (num == 0){
      message = "zero";
    } else {
      message ="invalid";
    }
    return message 
  }