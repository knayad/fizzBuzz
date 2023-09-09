function fizzBuzz(n) {
    for(let i = 1; 0 < n < 2 * 10^5 && i <= n; i++){
        if (i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        }
        
        if ( i % 3 === 0 && i % 5 !== 0){
            console.log("Fizz");
        }
        
        if (i % 5 === 0 && i % 3 !== 0){
            console.log("Buzz");
        }
        
        if (i % 5 !== 0 && i % 3 !== 0){
            console.log(i);
        }
    }
};
