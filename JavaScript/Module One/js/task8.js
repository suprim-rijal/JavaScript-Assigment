const start = parseInt(prompt("Enter the starting year:"));
const end = parseInt(prompt("Enter the ending year:"));
const list = document.getElementById("answer");


if(start>end){
    alert("Starting year cannot be more then ending year!!!")
}
else{
for(let year=start;year<=end;year++){
    const li = document.createElement("li");

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
     li.textContent =  year;
     list.appendChild(li);
}
}
}