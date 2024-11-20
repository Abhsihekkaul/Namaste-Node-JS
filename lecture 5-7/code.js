const fs = require('fs');
const https = require('https');

const a = 10000002;
const b = 29322;

console.log("I am in the beginning of the GEC")

// will go to the libuv
https.get("https://dummyjson.com/products/1",(res)=>{
    console.log("Data Fetched successfully")
})

// will go to the libuv
fs.readFile(`${__dirname}/data.txt`, 'utf-8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
    } else {
        console.log(data);
    }
});



// will go to the libuv
setTimeout(()=>{
    console.log("I will be called after 5 seconds ")
},5000);


// will be run immediately by the V8
function multiplication(a,b){
    return console.log(`The multiplication of your given numeber ${a} and ${b} is ${a * b}`);
}

multiplication(a,b);


// All the methods which ends will the sync are the sycronous methods they will lead to block of the main thread
