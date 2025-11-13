'use strict';
const names = ['John', 'Paul', 'Jones'];

const list = document.getElementById("target");

for(let i=0;i<3;i++){
    let newElement = document.createElement("li");
    newElement.textContent = `${names[i]}`;
    list.appendChild(newElement)
}
