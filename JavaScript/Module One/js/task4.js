var number = Math.floor(Math.random() * 4) + 1;
var Username = prompt("Enter your name:");


if(number==1){
    document.getElementById("name").textContent = `${Username}, you are Gryffindor.`
}

else if(number==2){
    document.getElementById("name").textContent = `${Username}, you are Slytherin.`
}

else if(number==3){
    document.getElementById("name").textContent = `${Username}, you are Hufflepuff.`
}

else{
    document.getElementById("name").textContent = `${Username}, you are Ravenclaw.`
}