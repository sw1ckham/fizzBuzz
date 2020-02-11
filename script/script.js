function fizzBuzz(number) {
    if (typeof(number)== "number" && i % 3 == 0 && i % 5 == 0) {
        return "Fizz Buzz";
    }
    else if (typeof(number)== "number" && i % 3 == 0) {
        return "Fizz";
    }
    else if (typeof(number)== "number" && i % 5 == 0) {
        return "Buzz";
    }
    else if (typeof(number)== "number" && i % 3 !== 0 && i % 5 !== 0) {
        return (i); 
    }
    else if (typeof(number)== "number" && i % 3 !== 0) {
        return (i); 
    }
    else if (typeof(number)== "number" && i % 5 !== 0) {
        return (i); 
    }
    else {
        alert("Error!");
    }
};