const { filter } = require("lodash");

//Data Set 1: Product Inventory
const products = [
  { id: 1, name: "Laptop", price: 1000, stock: 5 },
  { id: 2, name: "Phone", price: 500, stock: 10 },
  { id: 3, name: "Tablet", price: 300, stock: 8 },
  { id: 4, name: "Monitor", price: 200, stock: 2 },
  { id: 5, name: "Mouse", price: 50, stock: 20 },
];
// Problems
//1 Use filter to find all products with a price greater than 300.
//2 Use map to create an array of product names.
//3 Use reduce to calculate the total value of all products in stock (price * stock for each product).
//4 Chain filter and map to find the names of products with stock less than 5.

// 1
const ProductGreaterThan300 = products.filter((item) => {
    if(item.price > 300){
        return item.name;
    }
})

console.log(ProductGreaterThan300);

// 2
const NamedArray = products.map((item) => {
    return item.name;
})

console.log(NamedArray);

// 3
const totalAmount = products.reduce((acc,item)=>{
    acc = acc + item.price
    return acc;
}, 0);

console.log(`the total price of all the items are $${totalAmount}`);

// 4
const namesOfStocklessthanfive = products.filter((items)=>{
    return (items.stock < 5)
}).map((items)=>{
    return items.name;
})

console.log(namesOfStocklessthanfive);






// 1. Employee Performance Analysis
// You are given a dataset of employees, each with a name, department, performance scores (an array), and the number of projects completed.

const employees = [
    { name: 'Alice', department: 'Engineering', scores: [85, 92, 88], projects: 10 },
    { name: 'Bob', department: 'HR', scores: [79, 85, 82], projects: 5 },
    { name: 'Charlie', department: 'Engineering', scores: [95, 90, 93], projects: 12 },
    { name: 'Diana', department: 'Finance', scores: [72, 78, 75], projects: 4 },
    { name: 'Eve', department: 'Engineering', scores: [88, 89, 91], projects: 8 },
];
// Task 1: Calculate the average score of each employee using map and add it as a new property in the objects.
// Task 2: Filter out employees with an average score of less than 85.
// Task 3: Use reduce to find the total number of projects completed by employees in the 'Engineering' department.
// Task 4: Find the name of the top-performing employee (highest average score).

// #1
employees.map((item)=>{
    let temp = 0;
    for(let i = 0; i < item.scores.length; i++){
        temp += item.scores[i];
        
    }
    item.avg = Math.round(temp / item.scores.length);
})

// #2
const goodEmployee = employees.filter((persons) => {
    return persons.avg > 85; // Only filter those with avg > 85
}).map((persons) => persons.name); // Map the result to just get the names

console.log(goodEmployee);


// #3 

const TotalEngineeringProjects = employees.filter((department) => {
    return department.department == "Engineering"
}).reduce((acc,project)=>{
    return acc +=  project.projects;
}, 0)

console.log(`Total projects done by the Engineering team is : ${TotalEngineeringProjects}`);


// 4

// const highestAvgScore = employees.map((employee)=>{
//     return {name : employee.name, employee.avg }
// }).reduce((max, curr)=>{
//     return curr.avg > max.avg ? curr : max;
// })

// console.log(highestAvgScore);