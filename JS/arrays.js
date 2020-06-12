//using push method to add items to the arrays.
const characters = ["Velda the Developer", "Karimi the painter", "VeldaKiara the best"];
console.log(characters);
characters.push("Blogger");
console.log(characters); 
//using forEach method which has a callback function
//callback functions are func written as arguments in another function

const characters = ["Velda the Developer", "Karimi the painter", "VeldaKiara the best"];
characters.forEach((character) => {
  console.log(character)
}
);

//using find method
const numbers = [1, 3, 5, 7, 9];
const foundNumber = numbers.find((number) => {
   return number % 3 === 0;
 }
 );
console.log(foundNumber);
const characters = [
  {id: 1, name: "Velda the Developer", age: 16},
  {id: 2, name: "Karimi the painter", age: 21},
  {id: 3, name: "Velda Kiara the best", age: 18},
  {id: 4, name: "Velda", age: 22}
];

const foundCharacter = characters.find((character) => {
  return character.id === 3;
}
);
console.log(foundCharacter);