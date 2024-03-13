const HEADER = "TuNiSiAa";
const header = document.getElementById("header");
header.addEventListener("onload", animateHeader(header));
function animateHeader(header){
    header.innerHTML = "";
    for (let i = 0; i <= HEADER.length; i++) {
        setTimeout(function(){header.innerHTML = HEADER.substring(0, i) + "|"}, i*250);
    }
    setTimeout(function(){setInterval(function(){header.innerHTML = HEADER + ((header.innerHTML.charAt(header.innerHTML.length - 1) === "|") ? " " : "|")}, 530)}, HEADER.length*250);
}
