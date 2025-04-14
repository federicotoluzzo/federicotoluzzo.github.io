function confirm(){
    const form = document.getElementsByTagName("form")[0];
    const values = {}
    let inputs = [];
    for (const input of form.getElementsByTagName("input")){
        inputs.push(input);
    }
    inputs.push(form.getElementsByTagName("select")[0]);
    for (const input of inputs){
        console.log(input)
        if(input.name.length === 0){
            continue;
        }
        values[input.name] = input.value;
    }
    console.log(values);
}

function initSelect(){
    const select = document.getElementsByTagName("select")[0];
    for(let i = 1; i < 1000; i++){
        const option = document.createElement("option");
        option.innerHTML = i;
        select.appendChild(option);
    }
}

initSelect();