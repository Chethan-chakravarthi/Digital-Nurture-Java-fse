let studentName = "Chethan";
let age = 21;
let isStudent = true;
let salary;
let address = null;
let marks = [90, 85, 88];
let student = {
    name: "Chethan",
    course: "CSE"
};

document.getElementById("output").innerHTML =
"<b>String:</b> " + studentName + "<br><br>" +
"<b>Number:</b> " + age + "<br><br>" +
"<b>Boolean:</b> " + isStudent + "<br><br>" +
"<b>Undefined:</b> " + salary + "<br><br>" +
"<b>Null:</b> " + address + "<br><br>" +
"<b>Array:</b> " + marks + "<br><br>" +
"<b>Object:</b> " + student.name + " - " + student.course;
