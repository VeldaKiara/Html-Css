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

//updating values in an array
animals[2]="rabbit";
console.log(animals[2]);

//iteration plus indexing
const animals = ["dog", "cat", "sheep"];
for(let i = 0; i < 3; i++){
  console.log(animals[i])
}

//preventing repeatition of objects in the arrays
const animals = ["dog", "cat", "sheep", "rabbit", "monkey", "tiger", "bear", "elephant"];
console.log(animals.length)
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}


