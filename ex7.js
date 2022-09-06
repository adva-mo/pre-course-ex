const primeNumberFromOneToN = (n)=>{ 
    let primeNumbers = 0;
    for (let i = 2;i<n;i++){
      let isPrime=true;
      for (let x = 2;x<i;x++){
        if (i%x==0){
        isPrime= false;
        }
      }
      if (isPrime==true){
        primeNumbers++;
      }
    }
    return primeNumbers
  }
  