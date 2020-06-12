const printKen = () => {
    console.log("Ken the Ninja");
  };
  
  const printMaster = () => {
    console.log("Master White");
  };
  
  const call = (callback) => {
    console.log("Calling the callback function.");
    callback();
  };
  
  call(printMaster);
   // callback
   const printKen = () => {
    console.log("Ken the Ninja");
  };
  
  const call = (callback) => {
    console.log("Calling the callback function.");
    callback();
  };
  
  call(printKen);

  // declaring callback func directly
  const printKen = () => {
    console.log("Ken the Ninja");
  };
  
  const call = (callback) => {
    console.log("Calling the callback function.");
    callback();
  };
  
  call(printKen);
  
  call(() => {
    console.log("Master White");
  });
  
  // arguments of callback func
  const call = (callback) => {
    callback("Ken the Ninja", 14);
  };
  
  call((name, age) => {
    console.log(`${name} is ${age} years old.`);
  });

