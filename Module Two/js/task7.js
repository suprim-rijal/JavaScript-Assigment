let list=[]

function dicerollar(number){
    return Math.floor(Math.random() * number) + 1;

}

const user = Number(prompt("Enter a roll playing side you want:"))
while(true){
    let number = dicerollar(user);
if(number===user){
    alert(`Highest side rolled i.e. ${user}, Program Stopped!!!!`)
    break;
}
else{
    list.push(number);
}
}
let html = "<ul>";
for (let item of list) {
    html += `<li>${item}</li>`;
}
html += "</ul>";

document.getElementById("list-container").innerHTML = html;