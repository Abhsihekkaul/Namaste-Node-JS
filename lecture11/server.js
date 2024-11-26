const http = require("node:http");
const os = require("node:os");

// Calculate the number of days the system has been running
const days = os.uptime() / (60 * 60 * 24);

// Log the result with 2 decimal places for better readability
console.log(days.toFixed(2), "days");


console.log(os.arch());

console.log(os.cpus());

// const server = http.createServer((req, res) => {
//   // Check for '/Fuck' URL before sending any response
//   if (req.url === '/Fuck') {
//     res.end("Nigga");  // Send this response for '/Fuck' URL
//     return;  // End further execution
//   }

//   // Default response for other routes
//   res.end("I have created my first server well you know what");
// });

// server.listen(3000, () => {
//   console.log('Server is listening on port 3000');
// });
