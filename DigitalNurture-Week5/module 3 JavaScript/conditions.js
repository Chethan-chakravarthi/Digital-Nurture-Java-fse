let marks = 82;
let result = "";

// if...else if...else
if (marks >= 90) {
    result += "<h2>Grade Evaluation</h2>";
    result += "Grade: A+<br><br>";
}
else if (marks >= 75) {
    result += "<h2>Grade Evaluation</h2>";
    result += "Grade: A<br><br>";
}
else if (marks >= 60) {
    result += "<h2>Grade Evaluation</h2>";
    result += "Grade: B<br><br>";
}
else {
    result += "<h2>Grade Evaluation</h2>";
    result += "Grade: C<br><br>";
}

// Switch Statement
let day = 3;

result += "<h2>Switch Statement</h2>";

switch(day){

    case 1:
        result += "Monday";
        break;

    case 2:
        result += "Tuesday";
        break;

    case 3:
        result += "Wednesday";
        break;

    case 4:
        result += "Thursday";
        break;

    case 5:
        result += "Friday";
        break;

    default:
        result += "Weekend";
}

document.getElementById("output").innerHTML = result;
