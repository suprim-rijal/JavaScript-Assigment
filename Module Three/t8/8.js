const button = document.getElementById('start');
button.addEventListener('click', function(evt){
    let first = parseInt(document.getElementById("num1").value);
    let second = parseInt(document.getElementById("num2").value);
    let operation = document.getElementById("operation").value;

    if( isNaN(first) || isNaN(second)){
        document.getElementById("result").innerHTML = `Enter number to calculate`;
        return;
    }

    if(operation=="add"){
    document.getElementById("result").innerHTML = first + second;
    }
    else if (operation=="sub"){
        document.getElementById("result").innerHTML = first - second;
    }
    else if (operation=="multi"){
        document.getElementById("result").innerHTML = first * second;
    }
    else if (operation=="div"){
        if(second==0){
            document.getElementById("result").innerHTML = `Cannot divide by zero`;
            return;
        }
        document.getElementById("result").innerHTML = first / second;
    }
    else{
        document.getElementById("result").innerHTML = `Error has Occured`;
        return;
    }
});
