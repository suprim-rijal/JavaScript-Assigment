var num = Number(prompt("Enter a number of Dice:"))
var sum = Number(prompt("Enter a sum of the Dice:"))

if(isNaN(num) || isNaN(sum)){
    alert("Entered value is not a number !");
}
else{
    loop = 10000
    let sucess=0;
    for(let i=1;i<=loop;i++){
     let result=0;
    for(let j=1;j<=num;j++){
       let number = Math.floor(Math.random() * 6) + 1;
       result = result + number;
}
if(sum === result){
        sucess++;
    }
}
document.getElementById("answer").textContent = `Probability to get sum ${sum} with ${num} dice is ${((sucess/loop)*100).toFixed(2)}%`;
}