var year = parseInt(prompt("Enter a year:"));

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
document.getElementById("answer").textContent = year + " is a leap year.";
}

else {
document.getElementById("answer").textContent = year + " is not a leap year.";
}