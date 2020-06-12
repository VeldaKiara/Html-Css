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

