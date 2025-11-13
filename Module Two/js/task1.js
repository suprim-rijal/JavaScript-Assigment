var a=[];

for(let i=0;i<5;i++){
    a.push(prompt("Enter a number"));
}
console.log(`Entered list way:`)
for(let j=0;j<=4;j++){
    console.log(a[j]);
}
console.log(`Reverse order-list way:`)
for(let j=4;j>=0;j--){
    console.log(a[j]);
}