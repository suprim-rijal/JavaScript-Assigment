const list = document.getElementById("target");

let items = ["First item", "Second item", "Third item"];

for(let i=0;i<3;i++){
    let newElement = document.createElement("li");
    newElement.textContent = `${items[i]}`;
    list.appendChild(newElement)
}
const classwritten = list.querySelectorAll("li")[1];
classwritten.classList.add("my-list");
