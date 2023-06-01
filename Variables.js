Object.defineProperty(window, 'PI', {
    value: 3.14,
    writable: false
  });
  
  PI = 42; // This will not modify the value of PI
  
  console.log(PI); // Output: 3.14
