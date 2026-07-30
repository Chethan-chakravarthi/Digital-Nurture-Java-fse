// Creating an Array
let fruits = ["Apple", "Banana", "Orange"];

// Adding an element
fruits.push("Mango");

// Removing the last element
fruits.pop();

// Adding at the beginning
fruits.unshift("Pineapple");

// Removing the first element
fruits.shift();

let result = `
<h2>Array Operations</h2>

Array Elements: ${fruits}<br><br>

First Fruit: ${fruits[0]}<br><br>

Second Fruit: ${fruits[1]}<br><br>

Total Fruits: ${fruits.length}<br><br>

<h2>Using forEach()</h2>
`;

fruits.forEach(function(fruit,index){

    result += `${index+1}. ${fruit}<br>`;

});

document.getElementById("output").innerHTML = result;
