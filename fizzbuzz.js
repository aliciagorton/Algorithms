// Given a random positive integar, 'num', print all of the numbers from 1 to 'num'
// But for multiples of 3, printe 'Fizz' instead of the number 
// And for multiples of 5, print 'Buzz' instead of the number
// And for multiple of 3 and 5, print 'FizzBuzz' instead of the number 

function fizzBuzz(num){
 
    // set up a for loop starting from 1 going until 'num'
    for (var i = 1; i <= num; i++) {

    // check if the current iteration (i) is a multiple of 3 and 5, if so print 'FizzBuzz'
    if(i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    // check if the current iteration (i) is a multiple of 3, if so print 'Fizz'
    else if (i % 3 === 0 {
        console.log ("Fizz");
    }
    // check if the current iteration (i) is a multiple of 5, if so print 'Buzz'
    else if (i % 5 === 0 {
        console.log ("Buzz");
    }
    // else, print 1 
    else {
        console.log(i);
    }
}   
}

fizzBuzz(25);