var number,sum=0;
var num = Number(prompt("Enter a number of times you want to roll the Dice:"))
if(isNaN(num)){
    alert("Entered value is not a number !");
}
else{
    for(let i=1;i<=num;i++){
    number = Math.floor(Math.random() * 6) + 1;
    sum = sum + number;
    console.log(`Rolled dice: ${number}`)
}
document.getElementById("answer").textContent = `Sum of the dice roll is: ${sum}`;
}
