// Creating an Object
let student = {

    name: "Chethan",
    age: 21,
    course: "Computer Science",
    college: "RMK College of Engineering and Technology",

    displayInfo: function(){

        return `
        Name: ${this.name}<br>
        Age: ${this.age}<br>
        Course: ${this.course}<br>
        College: ${this.college}
        `;
    }

};

let result = `
<h2>Student Details</h2>

${student.displayInfo()}
`;

document.getElementById("output").innerHTML = result;
