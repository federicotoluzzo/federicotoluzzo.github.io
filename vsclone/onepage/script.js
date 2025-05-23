function loadHomepage(){
    fetch("/vsclone/onepage/home.html").then((response)=>{
        response.text().then((html)=>{
            document.documentElement.innerHTML = html;
        });
    })
}

function loadDownloads(){
    fetch("/vsclone/onepage/download.html").then((response)=>{
        response.text().then((html)=>{
            document.documentElement.innerHTML = html;
        });
    })
}

function loadAPI(){
    fetch("/vsclone/onepage/api.html").then((response)=>{
        response.text().then((html)=>{
            document.documentElement.innerHTML = html;
        });
    })
}