'use strict';


function chooseWord(arr){
    let x = Math.floor(Math.random()*10);
    let secret_word =arr[x];
    return secret_word
  }
  function discoverLetter(string_of_stars, original_secret_word, letter){
      let len = original_secret_word.length; 
      let s = "";
      let letter2=letter.toUpperCase();
      for (let x=0;x<len;x++){
          if (original_secret_word[x] == letter){
              s+= letter;
          }else if (original_secret_word[x] == letter2){
        s+= letter2;
          } else {
            s+=string_of_stars[x];
          }
      }
      return s
  }
  
  function convertAstrix(str){
    let StringOfStars= "";
    for (let i of str){
      StringOfStars+="*";
    }
    return StringOfStars
  }
  
  function onlyLetters(str) {
    return /^[a-zA-Z]+$/.test(str);
  }
  
  function checkForStars(str){
    for (let i of str){
      if (i=="*"){
        return true;
      }
    }
  }
  
  
  function checkGuess(str,guess){
    let guess2 = guess.toUpperCase();
    let checkGuess = false;
    for (let i of str){
      if (i == guess || i ==guess2){
        checkGuess = true;
      }
    }
    return checkGuess
  }
  
  console.log(`
                                         
   _____ _____ _____ _____    _____ _____ _____ 
  |  |  |  _  |   | |   __|  |     |  _  |   | |
  |     |     | | | |  |  |  | | | |     | | | |
  |__|__|__|__|_|___|_____|  |_|_|_|__|__|_|___|
                                                
  
  `)
  
  let words = ["Antarctica","inception","subway","unknown","microwave","jogging","strength","youthful","friendship","Ethiopia"];
  let originalSecretWord = chooseWord(words);
  let StringOfStars = convertAstrix(originalSecretWord);
  let guesses = 10;
  
  while (guesses>0 && checkForStars(StringOfStars)){
    console.log(
`you have `+guesses+` guesses
the word is: 
`+StringOfStars);
    const prompt = require('prompt-sync')({sigint: true});
    let guess = prompt('What is your guess?:');
    guess = guess.toLowerCase();
    
    if (guess.length>1 || !onlyLetters(guess)){
      console.log("please enter only one character");
    } else if (checkGuess(originalSecretWord,guess)){
      StringOfStars= discoverLetter(StringOfStars,originalSecretWord,guess);
    } else {
      guesses--;
    }
  }
  
  if (guesses>0){
    console.log("wow you are good!");
  } else {
    console.log("GAME OVER");
  }

  
  
  