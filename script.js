const HEADER = "TuNiSiAa";
const header = document.getElementById("header");
header.addEventListener("onload", animateHeader(header));
function animateHeader(header){
    header.innerHTML = "";
    for (let i = 0; i <= HEADER.length; i++) {
        setTimeout(function(){header.innerHTML = HEADER.substring(0, i) + ((i % 2 === 0) ? "&#9646" : "_")}, i*530);
    }
    setTimeout(function(){setInterval(function(){header.innerHTML = HEADER + ((header.innerHTML.charAt(header.innerHTML.length - 1) === "_") ? "&#9646" : "_")}, 530)}, HEADER.length*530);

}
