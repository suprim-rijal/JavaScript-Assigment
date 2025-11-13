const button = document.getElementById('start');

button.addEventListener('click', function(evt){
    let operation = document.getElementById("calculation").value.trim();


    if(operation.includes("+")){
        const parts = operation.split('+');
        document.getElementById("result").innerHTML = parseInt(parts[0]) + parseInt(parts[1]);
    }
    else if(operation.includes("-")){
        const parts = operation.split('-');
        document.getElementById("result").innerHTML = parseInt(parts[0]) - parseInt(parts[1]);
    }
    else if(operation.includes("*")){
        const parts = operation.split('*');
        document.getElementById("result").innerHTML = parseInt(parts[0]) * parseInt(parts[1]);
    }
    else if (operation.includes("/")){
        const parts = operation.split('/');
        if(parseInt(parts[1]===0)){
            document.getElementById("result").innerHTML = `Cannot divide by zero`;
            return;
        }
        document.getElementById("result").innerHTML = parseInt(parts[0]) / parseInt(parts[1]);
        
    }
    else{
        document.getElementById("result").innerHTML = `Error has Occured Check the Entered value`;
        return;
    }
});
