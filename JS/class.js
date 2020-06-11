const animal ={
    name:"Leo",
    age: 3,
    greet: () => {
      console.log("Hello");
    }
    
  };
  
  console.log(animal.name);
  animal.greet()

  class Animal {
    constructor (){
      console.log("Created a new instance");
    }
      
    
    }
    
    const animal = new Animal();

    //template strings, classes and constructors plus instances
    class Animal {
        constructor() {
           this.name = "Leo";
           this.number = 3;
          
        }
      }
      
      const animal = new Animal();
      console.log(`Name: ${animal.name}`);
      console.log(`Age: ${animal.number}`);