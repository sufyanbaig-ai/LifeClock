const birthDate = new Date("2004-03-15");
const today = new Date();
const timeDifference = today - birthDate;
const daysAlive = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

document.getElementById("daysAlive").innerText = daysAlive;

// Reset button functionality
document.getElementById("resetButton").addEventListener("click", () => {
    document.getElementById("daysAlive").innerText = "0 days";
});

// Change background color button functionality
document.getElementById("colorButton").addEventListener("click", () => {
    const colors = [
        "linear-gradient(to right, #00c6ff, #0072ff)",
        "linear-gradient(to right, #ff758c, #ff7eb3)",
        "linear-gradient(to right, #f9d423, #ff4e50)",
        "linear-gradient(to right, #00c6ff, #f0a500)"
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = randomColor;
});
