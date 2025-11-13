let list=[]

function dicerollar(){
    return Math.floor(Math.random() * 6) + 1;

}

while(true){
    let number = dicerollar();
if(number===6){
    alert("6 rolled, Program Stopped!!!!")
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