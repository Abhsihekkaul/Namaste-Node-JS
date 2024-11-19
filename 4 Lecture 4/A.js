// Ways to export 
// require("./B.js") //but this will only execute the code inside but will not provide use the access to 
// their private variables and methods  but it will work even without the module.export 
// so we need to create a variable and map with the require function to export what B.js has to offer to us

const CalculateSum = require("./B.js");

console.log("I am A.js")

CalculateSum(35,30);



// now what if we want to export multiple things 

const obj = require("./C.js");
// we can also destructure on the fly like the following and use them as as they are. 
// const {BringCoffee, Greetings} = require("./C.js");

// normally if your see we are exporting a dictionary from the C and using it here in A and also using it inside the obj which is also created as the dictionary 


console.log(obj.Greeting);
obj.BringCoffee();
