let number = 1;

console.log(number);
number += 1

console.log(number);
number += 1;
console.log(number);
number += 1;
console.log(number);
number += 1;
console.log(number);
number += 1;

//iteration using while loop
let number = 1;

// Add a while loop here, prints 1-100
while(number <= 100){
  console.log(number);
  number += 1;
}

//using for loop like list comprehensions in py
//number++ is equal to number += 1
for(let number=1; number<= 100; number++ ){
  console.log(number);
}
//for and if statements to output multiples of 3
for (let number = 1; number <= 100 ; number ++) {
  if(number % 3 == 0){
    console.log("Multiple of 3");
  }else{
    console.log(number)
  }
}

//arrays 
const animals=["dog", "cat", "sheep"];
console.log(animals);
//referencing arrays using index
console.log(animals[0]);
console.log(animals[2]);


