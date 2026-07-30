let result = "<h2>For Loop</h2>";

for(let i = 1; i <= 5; i++){
    result += "Number : " + i + "<br>";
}

result += "<br><h2>While Loop</h2>";

let j = 1;

while(j <= 5){
    result += "Number : " + j + "<br>";
    j++;
}

result += "<br><h2>Do While Loop</h2>";

let k = 1;

do{
    result += "Number : " + k + "<br>";
    k++;
}
while(k <= 5);

document.getElementById("output").innerHTML = result;
