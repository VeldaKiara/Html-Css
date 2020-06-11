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
           this.age = 3;
          
        }
      }
      
      const animal = new Animal();
      console.log(`Name: ${animal.name}`);
      console.log(`Age: ${animal.age}`);

    //passing arguments in constructors and calling them through objects using parameters
    class Animal {
        constructor(name, age) {
          this.name = name;
          this.age = age;
        }
      }
      
      const animal = new Animal("mocha", 8);
      
      console.log(`Name: ${animal.name}`);
      console.log(`Age: ${animal.age}`);
