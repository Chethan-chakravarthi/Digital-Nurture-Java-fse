// Module 5 - Babel & Webpack

const course = "Cognizant Digital Nurture";
const module = "Module 5 - Babel & Webpack";

function showMessage() {
    const app = document.getElementById("app");

    app.innerHTML = `
        <div style="
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 80px;
        ">
            <h1 style="color:#007bff;">${course}</h1>
            <h2>${module}</h2>
            <p>Welcome to Babel & Webpack.</p>
            <p>Your project is configured successfully.</p>

            <button id="btn">Click Me</button>

            <p id="result"></p>
        </div>
    `;

    document.getElementById("btn").addEventListener("click", () => {
        document.getElementById("result").innerHTML =
            "🎉 Congratulations! Babel & Webpack are working successfully.";
    });
}

showMessage();
