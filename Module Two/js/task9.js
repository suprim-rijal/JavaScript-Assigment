
function even(number){
    let arr =[];
    for(let i=0;i<number.length;i++){
        if(number[i]%2==0){
            arr.push(number[i])
        }
    }
    return arr;
}

array = [3,2,4,7,8,10,50,33];

console.log(`Original array: ${array}`);
console.log(`New Array: ${even(array)}`);