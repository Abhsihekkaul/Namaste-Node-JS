// Classes, Objects, and Inheritance
// Task 1: Class Inheritance

// Create a class Vehicle with properties make and model, 
// and a method getDetails() that returns a string "Make: [make], Model: [model]".
//  Create a subclass Car that extends Vehicle and adds a method startEngine() that returns "Engine started".



// Task 2: Method Overriding in Inheritance

// Extend the Vehicle class from the previous task to include a method move()
//  that returns "The vehicle is moving". Then, override the move() method in the 
// Car class to return "The car is driving".



// Task 3: Static Methods in Classes

// Add a static method isVehicle(obj) to the Vehicle class that checks if a
//  given object is an instance of Vehicle. The method should return true if
//  the object is a Vehicle or a subclass of Vehicle, and false otherwise.


class Vehicle{
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
    getDetails(){
        return `Make: ${this.make}, Model: ${this.model}`;
    }
    move(){
        return "The car is driving";
    }
    static isVehicle(obj){
        if(obj instanceof Vehicle){
            return true;
        }else{
            return false;
        }
    }
  }
  
  class Car extends Vehicle {
    startEngine(){
        return 'Engine started'
    }
}
  

// Encapsulation, Polymorphism, Abstraction, and Getters/Setters
// Task 1: Encapsulation Using Getters and Setters

// Create a class BankAccount with a private property _balance. 
// Add methods deposit(amount) and withdraw(amount). Use getters and 
// setters to access and modify the _balance while ensuring the balance never goes negative.

// Task 2: Polymorphism with Method Overriding

// Create a class Shape with a method area() that returns 0.
//  Create two subclasses Circle and Rectangle that override the area() method to
//   calculate the area of a circle and a rectangle, respectively.

// Task 1
class BankAccount {
    constructor(balance = 0) {
        this._balance = balance; // Private property (by convention)
    }

    // Getter to retrieve the balance
    get balance() {
        return this._balance;
    }

    // Setter to update the balance (prevents negative balance)
    set balance(amount) {
        if (amount < 0) {
            console.log("Balance cannot be negative.");
        } else {
            this._balance = amount;
        }
    }

    // Method to deposit money
    deposit(amount) {
        if (amount <= 0) {
            console.log("Deposit amount must be greater than 0.");
        } else {
            this._balance += amount;
            console.log(`Deposited: ${amount}. New Balance: ${this._balance}`);
        }
    }

    // Method to withdraw money
    withdraw(amount) {
        if (amount > this._balance) {
            console.log("Insufficient funds.");
        } else if (amount <= 0) {
            console.log("Withdrawal amount must be greater than 0.");
        } else {
            this._balance -= amount;
            console.log(`Withdrew: ${amount}. New Balance: ${this._balance}`);
        }
    }
}

// Example usage
const myAccount = new BankAccount(100); // Initialize with a balance of 100
console.log("Initial Balance:", myAccount.balance); // Using getter

myAccount.deposit(50); // Deposit 50
myAccount.withdraw(30); // Withdraw 30
myAccount.withdraw(150); // Attempt to withdraw more than balance

myAccount.balance = -200; // Using setter (should not allow negative balance)
console.log("Final Balance:", myAccount.balance);

  
  // Task 2
class Shape {
    area() {
        return 0; // Default implementation
    }
}

class Circle extends Shape {
    constructor(radius) {
        super(); // Call parent class constructor
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius; // Area of a circle
    }
}

class Rectangle extends Shape {
    constructor(length, width) {
        super(); // Call parent class constructor
        this.length = length;
        this.width = width;
    }

    area() {
        return this.length * this.width; // Area of a rectangle
    }
}

// Example usage
const myCircle = new Circle(5);
console.log("Circle Area:", myCircle.area()); // Circle Area: 78.53981633974483

const myRectangle = new Rectangle(4, 6);
console.log("Rectangle Area:", myRectangle.area()); // Rectangle Area: 24
