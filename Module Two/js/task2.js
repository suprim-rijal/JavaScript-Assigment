let name=[];

const num = parseInt(prompt("Enter the number of the participants:"));

for(let i=0;i<num;i++){
    var user = (prompt(`Enter the participant number ${i+1} name:`));
    name.push(user);
}

let html = "<ol>";

for(let item=0;item<num-1;item++) {
    for(let j=item+1;j<num;j++){
       if(name[item].toLowerCase()>name[j].toLowerCase()){
        let temp=name[item]
        name[item]=name[j]
        name[j]=temp
      }
     }
}
for (let item of name) {
    html += `<li>${item}</li>`;
}

html += "</ol>";

document.getElementById("list-container").innerHTML = html;