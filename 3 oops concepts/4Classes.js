// Abstraction Example 

class Coffee {
    // Private methods
    #BoilingWater() {
        console.log("Water is boiled");
    }

    #BrewingCoffee() {
        console.log("Coffee got brewed");
    }

    #ServingCoffee() {
        console.log("Coffee got prepared and served to you. Yay!");
    }

    bringCoffee() {
        // Array of private method references
        const listOfMethodsToBuildCoffee = [
            this.#BoilingWater.bind(this),
            this.#BrewingCoffee.bind(this),
            this.#ServingCoffee.bind(this),
        ];

        // Call each method sequentially with a delay
        listOfMethodsToBuildCoffee.forEach((method, index) => {
            setTimeout(() => {
                method();
            }, 1000 * index);
        });
    }
}

const MyCoffee = new Coffee();
MyCoffee.bringCoffee();


// Polymorphism Example

class Bird{
    canFly(){
        console.log("Flying......")
    }
}

class Penguin extends Bird{
    canFly(){
        console.log("Penguin can't Fly!!!!!");
    }
}

class Sparrow extends Bird{
    CreateNest(){
        console.log("Creating My Nest");
    }
}

const Bird1 = new Bird();
const Penguin1 = new Penguin();
const Sparrow1 = new Sparrow();

console.log(Bird1.canFly());
console.log(Penguin1.canFly());  //here the answer will change due to polymorphism 
console.log(Sparrow1.canFly());

// if we want any methods to work without the creation of the object but simply logging the classname followed by method name 
// for that we have static 

class UsingStatic{
    static CheckingStatic(){
        console.log("It won't work if you try to use it by creating the object it is class's own method not for the object creation purposes")
    }
}

const testing = new UsingStatic();
// console.log(testing.CheckingStatic());throw an erro
console.log(UsingStatic.CheckingStatic()); 
