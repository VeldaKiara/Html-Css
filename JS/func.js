const greet = function() {
    console.log("Hello!");
    console.log("Let's study functions!");
  };
  greet();
  //a new function
  const hello = function() {
    console.log("Hello");
    console.log("I am Velda");
  };
  hello();

  //arrow functions
  const greet = () => {
    console.log("Hello!");
    
  }
  greet();

  
//arguments and parameters
const greet = name =>{
    console.log(`Hello, ${name}`);
  }
  greet("Master White");

  //multiple arguments
  const add = (number1, number2) => {
    console.log(number1 + number2);
    
    
  };
  add(5, 7);
  // division
  const half = (number) => {
    return number / 2;
    
  };
  
  const result = half(130);
  console.log(`Half of 130 is ${result}`);
  