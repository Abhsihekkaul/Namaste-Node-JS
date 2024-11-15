class Calculator {
    constructor(a, b) {  //constrctor is also a method and if we are trying to inherit these properties it will also get inherit along with other methods
        this.a = a;
        this.b = b;
    }

    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return (a > b) ? (a - b) : (b - a);
    }
}

// Example usage
const calculator = new Calculator();
console.log(calculator.add(5, 7)); // Output: 12
console.log(calculator.subtract(10, 7)); // Output: 3

// inheriting the properties of the Calculator inside the Fullcalculator Class

class FullCalculator extends Calculator{
    multiply(a,b){
        return a*b;
    }
    dividation(a,b){
        if(a > b && b != 0){
            return a / b;
        }else{
            return b / a;
        }
    }
}

const calculation = new FullCalculator();
console.log(calculation.add(5,8));
console.log(calculation.multiply(7,8));


// /Encalsulation : the ability to hide the important information to be used outside the class

class BankAccount {
    #balance = 0;  // private encapsulated balance

    // Method to add a specified amount to the balance
    addBalance(amount) {
        this.#balance += amount;  // correctly add the amount to the private #balance field
        console.log(`After the addition, the new balance is: $${this.#balance}`);
    }

    // Method to get the current balance
    getBalance() {
        console.log(`Balance is $${this.#balance}`);
    }
}

// Usage
const personOne = new BankAccount();
personOne.getBalance(); // Output: Balance is $0

const personTwo = new BankAccount();
personTwo.addBalance(2500); // Output: After the addition, the new balance is: $2500
personTwo.getBalance(); // Output: Balance is $2500
