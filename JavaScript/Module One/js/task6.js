var input = confirm("Should I create the square root?")

if (input == true){
    var number = Number(prompt("Enter a Number"));
    if(number>0){
        document.getElementById("answer").textContent = `The Square root of ${number} is ${number*number}.`
    }
    else if(isNaN(number)){
      alert("You entered a string (not a number).");}
    else{
        document.getElementById("answer").textContent = `The square root of a negative number is not defined.`
    }
}

else{
    document.getElementById("answer").textContent = `The square root is not calculated.`
}