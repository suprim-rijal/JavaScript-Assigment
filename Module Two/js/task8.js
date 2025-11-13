const array = ["Suprim","Rijal","is","task","nine"]
var concatination="";
function concat(arr){
    for(let i=0;i<arr.length;i++){
        concatination = concatination + arr[i];
    
    }
    return concatination
}
let result = concat(array)


document.getElementById("result").innerHTML = `For the array:["Suprim","Rijal","is","from","Nepal"]`;
document.getElementById("answer").innerHTML = `Answer is: ${result}`;