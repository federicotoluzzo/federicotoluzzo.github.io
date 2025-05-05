const form = document.getElementsByTagName("form")[0];
let previousValues;
function confirm(){
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
    console.log(previousValues)
    console.log(values);

    const isConfirmed = ()=>{
        for(key in values){
            try{
                if(values[key] != previousValues[key]){
                    return false;
                }
            }catch{
                return false;
            }
        }
        return true;
    }

    if(isConfirmed()){
        alert("Data submitted successfully")
        console.log("debug")
    }
    previousValues = values;
    const preview = document.getElementById("preview");
    preview.style.display = "flex"
    preview.style.flexDirection = "column"
    preview.innerHTML = ""

    const emailPreview = document.createElement("p");
    emailPreview.innerHTML = "Email : " + values["email"]

    const newsletterPreview = document.createElement("p");
    newsletterPreview.innerHTML = "Newsletter : " + values["newsletter"]

    const phoneNumberPreview = document.createElement("p");
    phoneNumberPreview.innerHTML = "Phone number : +" + values["prefix"] + " " + values["number"];


    preview.appendChild(emailPreview)
    preview.appendChild(newsletterPreview)
    preview.appendChild(phoneNumberPreview)
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

const phoneNumberRange = form.getElementsByTagName("input").item(2);
const phoneNumberPrefix = form.getElementsByTagName("select").item(0);
const submitButton = form.getElementsByTagName("input").item(3);
phoneNumberRange.addEventListener("input", ()=>{
    document.getElementById("pn_preview").innerHTML = "+" + phoneNumberPrefix.value + " " + phoneNumberRange.value;
});