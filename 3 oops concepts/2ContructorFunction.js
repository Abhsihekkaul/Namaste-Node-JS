// this is the way to create the constructor function in javascript 

function Calculator() {
    this.history = [];
  
    this.add = function(a, b) {
      const result = a + b;
      this.history.push(`Added ${a} + ${b} = ${result}`);
      return result;
    };
  
    this.subtract = function(a, b) {
      const result = a - b;
      this.history.push(`Subtracted ${a} - ${b} = ${result}`);
      return result;
    };
  
    this.multiply = function(a, b) {
      const result = a * b;
      this.history.push(`Multiplied ${a} * ${b} = ${result}`);
      return result;
    };
  
    this.divide = function(a, b) {
      if (b === 0) {
        this.history.push(`Attempted to divide by zero`);
        return 'Error: Division by zero';
      }
      const result = a / b;
      this.history.push(`Divided ${a} / ${b} = ${result}`);
      return result;
    };
  
    this.getHistory = function() {
      return this.history;
    };
  
    this.clearHistory = function() {
      this.history = [];
    };
  }

//   if we want to add some new propterty outside the function we can do 
// this way of adding functionality is called prototype chain 
Calculator.prototype.remainder = function(a,b){
    const result = a % b ;
    this.history.push(`the remainer of ${a} from ${b} is ${result}`);

}
  
  const calc = new Calculator();
  console.log(calc.add(5, 3)); // 8
  console.log(calc.subtract(10, 4)); // 6
  console.log(calc.getHistory());
  console.log(calc.remainder(5,50));
  console.log(calc.getHistory());
  
