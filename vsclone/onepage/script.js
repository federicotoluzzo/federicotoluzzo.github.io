function loadHomepage(){
    fetch("/vsclone").then((response)=>{
        response.text().then((html)=>{
            document.documentElement.innerHTML = html;
        });
    })
}

function loadDownloads(){
    fetch("/vsclone/download").then((response)=>{
        response.text().then((html)=>{
            document.documentElement.innerHTML = html;
        });
    })
}

function loadAPI(){
    fetch("/vsclone/api").then((response)=>{
        response.text().then((html)=>{
            document.documentElement.innerHTML = html;
        });
    })
}