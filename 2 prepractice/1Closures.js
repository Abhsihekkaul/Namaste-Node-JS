// closures 
// the function bundled with its lexical scope forms a closures.

function outer(){
    let a = 10;
    function inner(){
        console.log(a);
    }
    return inner;
}

const a = outer()();
console.log(a);


// interview question with set timeout 

function outer1() {
    for (var i = 0; i < 5; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000 * i); // Delay each log to prevent overlap
    }
}

outer1();


// it will kept printing the 5 as before the initiation of settimeout callback function i for loop's i would have 
// reach to 5 and the exxecution has 5 request for printing the 5

// we can solve it just by using the let 

// but we can also solve it using the callback function using the var 

function outer2() {
    setTimeout(()=>{
        for (let i = 0; i < 5; i++) {
            function inner2(x) {
                setTimeout(() => {
                    console.log(x);
                }, 1000 * x); // Delay each log based on x (0, 1000ms, 2000ms, etc.)
            }

            inner2(i);
        }
    }, 5000);
        
}

outer2();

