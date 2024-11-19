let Course_Name = "Namaste NodeJs ";
let Teacher_name = "Akshay Saini";


console.log("I am Learning Node js from ", Course_Name, " Course ");
console.log("The instructor for is course is great great ", Teacher_name,  " .");


setTimeout(()=> {
    console.log("Hello world ");
}, 2000)

console.log(global);
console.log(globalThis);
console.log(this); // here is the problem using this it shows the empty bracket
console.log(global === globalThis);

function Abhi(){
    console.log(this);
}

Abhi();