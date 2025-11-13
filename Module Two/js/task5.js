let name=[];
let check =true;
while(check){
    let user = prompt(`Enter a number:`);
    if(name.includes(user)){
        alert("Already exists... Stopping the program...")
        check=false;
    }
    else{
        name.push(user);
    }
}

for(let item=0;item<(name.length)-1;item++) {
    for(let j=item+1;j<(name.length);j++){
       if(name[item] > name[j]){
        let temp=name[item];
        name[item]=name[j];
        name[j]=temp;
      }
     }
}
for (let i=0;i<(name.length);i++) {
    console.log(name[i]);
}
