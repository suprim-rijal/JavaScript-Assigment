'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const list = document.getElementById("target");


  for(const c of students){
    let newElement = document.createElement("option");
    list.appendChild(newElement);
    newElement.innerHTML = `${c.name}`;
    newElement.value =`${c.id}`;
  }

