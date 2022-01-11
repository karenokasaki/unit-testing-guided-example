function sum(a, b) {
  if (!a && !b) {
    a = 0
    b = 0
  }
  if (!a){
    a = 0 
  }
  if (!b) {
    b = 0
  }
  
  return a + b;
}

function subtract(a, b) {
  if (!a && !b) {
    a = 0
    b = 0
  }
  if (!a){
    a = 0 
  }
  if (!b) {
    b = 0
  }
  return a - b;
}

function divide(a, b) {
  if (a === 0) { 
    throw console.error();
  }
  if (b === 0) {
    throw console.error();
  }
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
