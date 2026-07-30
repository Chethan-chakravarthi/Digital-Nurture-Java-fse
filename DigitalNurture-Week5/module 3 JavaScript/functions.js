// Function without parameters
function welcome() {
    return "Welcome to JavaScript!";
}

// Function with parameters
function add(a, b) {
    return a + b;
}

// Function with return value
function multiply(a, b) {
    return a * b;
}

// Arrow Function (ES6)
const square = (num) => num * num;

// Display Output
let result = `
<h2>Function Examples</h2>

Welcome Message: ${welcome()}<br><br>

Addition (20 + 10): ${add(20,10)}<br><br>

Multiplication (5 × 6): ${multiply(5,6)}<br><br>

Square of 8: ${square(8)}
`;

document.getElementById("output").innerHTML = result;
