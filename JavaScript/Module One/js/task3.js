var a = Number(prompt("Enter First number:"))
var b = Number(prompt("Enter Second number:"))
var c = Number(prompt("Enter Third number:"))

document.getElementById("sum").textContent=`The Sum is: ${a+b+c}.`
document.getElementById("product").textContent=`The Product is: ${a*b*c}.`
document.getElementById("average").textContent=`The Average is: ${(a+b+c)/3}.`