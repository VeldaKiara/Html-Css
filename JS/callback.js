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