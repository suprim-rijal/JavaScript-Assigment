const num = parseInt(prompt("Enter the number to check if its prime or not:"));
var check =true;
if(num<0  || num==null){
    alert("Please enter a positive number!!")
}
else if(num==0 || num==1){
    document.getElementById("answer").textContent =`Neither prime or composite`;

}
else{
for(let i=2;i<Math.sqrt(num);i++){
    if (num%i==0){
        check=false;
    }
    break;
}

if(check){
    document.getElementById("answer").textContent =`${num} is a prime number.`;
}
else{
    document.getElementById("answer").textContent =`${num} is not a prime number.`;
}
}