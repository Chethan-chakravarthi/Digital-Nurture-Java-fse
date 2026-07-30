let a = 20;
let b = 10;

let result = `
<h2>Arithmetic Operators</h2>

Addition: ${a + b}<br>
Subtraction: ${a - b}<br>
Multiplication: ${a * b}<br>
Division: ${a / b}<br>
Modulus: ${a % b}<br><br>

<h2>Comparison Operators</h2>

a == b : ${a == b}<br>
a === b : ${a === b}<br>
a != b : ${a != b}<br>
a > b : ${a > b}<br>
a < b : ${a < b}<br><br>

<h2>Logical Operators</h2>

(a > 5 && b < 20) : ${a > 5 && b < 20}<br>
(a < 5 || b < 20) : ${a < 5 || b < 20}<br>
!(a > b) : ${!(a > b)}
`;

document.getElementById("output").innerHTML = result;
