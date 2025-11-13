let name=[];
const num=6;
for(let i=0;i<num;i++){
    let user = prompt(`Enter the dog number ${i+1} name:`);
    name.push(user);
}

let html = "<ul>";
for(let item=0;item<num-1;item++) {
    for(let j=item+1;j<num;j++){
       if(name[item].toLowerCase() < name[j].toLowerCase()){
        let temp=name[item];
        name[item]=name[j];
        name[j]=temp;
      }
     }
}
for (let item of name) {
    html += `<li>${item}</li>`;
}

html += "</ul>";

document.getElementById("list-container").innerHTML = html;
