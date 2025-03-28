let dropdownStates = []

let body = document.getElementsByTagName("body")
let div = document.getElementsByClassName("dropdown")

for (let i = 0; i < document.getElementsByClassName("dropdown").length; i++){
    dropdownStates.push(false);
    const dropdown = document.getElementsByClassName("dropdown")[i];
    dropdown.getElementsByTagName("div")[0].style.display = "none";
    dropdown.getElementsByTagName("div")[0].style.position = "absolute";
    dropdown.addEventListener("click", ()=>{
        if(dropdownStates[i]){
            dropdown.getElementsByTagName("div")[i].style.display = "none";
        } else {
            dropdown.getElementsByTagName("div")[i].style.display = "flex";
        }
        dropdownStates[i] = !dropdownStates[i];
        dropdown.getElementsByTagName("div")[0].style.top = (mouseY + document.body.getBoundingClientRect()) + "px";
        dropdown.getElementsByTagName("div")[0].style.left = mouseX + "px";
    });

    dropdown.addEventListener("mouseleave", ()=>{
        dropdown.getElementsByTagName("div")[i].style.display = "none";
        dropdownStates[i] = false;
    });
}
