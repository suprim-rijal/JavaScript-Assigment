const form = document.getElementById("source");

form.addEventListener('submit', function(evt){
    evt.preventDefault();
    let fname =document.querySelector('input[name="firstname"]').value;
    let lname =document.querySelector('input[name="lastname"]').value;
    document.getElementById("target").innerHTML =`Your name is ${fname} ${lname}`;

});