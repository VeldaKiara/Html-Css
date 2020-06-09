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
//using objects and properties
const character ={name:"Ken the Ninja", age:14};
console.log(character)

//updating value of objects properties
const character = {name: "Ken the Ninja", age: 14};
console.log(character.name);
character[age]=20;
console.log(character);

//combinig arrays, objects and properties
const characters = [
  {name: "Ken the Ninja", age: 14},
  {name: "Master White", age: 1000}
];
console.log(characters[0]);
console.log(characters[1].name);

//objects and properties, arrays and referencing them
const characters = [
  {name: "Ken the Ninja", age: 14},
  {name: "Master White", age: 100},
  {name: "Ben the Baby Ninja", age: 5},
];
for (let i = 0; i < characters.length; i++) {
  console.log("--------------------");
  const character = characters[i];
  console.log(`My name is  ${character.name}`);
  console.log(`I am ${character.age} years old`)
}
