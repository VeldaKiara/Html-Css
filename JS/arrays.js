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
