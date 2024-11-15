// everything is object in javascript

// __proto__ dunder method : user to inherit properties from different object
const myvar = {
    cpu : 12,
}

const yourvar = {
    screen : "hd",
    __proto__ : myvar, //by doing this we are trying to accessing its properties by defining __proto__
}

console.log(yourvar.__proto__);


const mylist = [1,2,3,4];
const yourlist = [1,3,5,mylist.__proto__]
console.log(yourlist.__proto__)

// Later people got bored writing __ all the time so they built the object.setprototypeof(a,b) which say a has access to all the properties of b

// example 
let genericCar = {tyres : 4};
let tesla = {
    driver : "AI"
};
// now ways to print it 

// #1
Object.setPrototypeOf(tesla, genericCar);
console.log(tesla.__proto__);  //print tyres : 4

// #2
console.log('tesla has ', tesla.tyres);

// #3
console.log("tesla has (logging through the Object.getPrototypeof)" , Object.getPrototypeOf(tesla) );

tesla.hasownproperty('tyres');