const API_URL = "https://api.open-meteo.com/v1/forecast?latitude=37.41166992482408&longitude=-122.07110349078079&current=temperature_2m,rain,wind_speed_10m,wind_direction_10m,is_day,relative_humidity_2m&timezone=auto&forecast_days=1";
const JSON_URL = "/vsclone/api/example.json";

let employeeData;
let displayType = true;

fetch(API_URL).then((response)=>{
    response.json().then((json)=>{
        document.getElementById("public").innerHTML = "<h4>Weather in our headquarters</h4>";
        document.getElementById("public").innerHTML += "Temperature : " + json["current"]["temperature_2m"] + json["current_units"]["temperature_2m"];
        document.getElementById("public").innerHTML += "<br><br>Humidity : " + json["current"]["relative_humidity_2m"] + json["current_units"]["relative_humidity_2m"];
        document.getElementById("public").innerHTML += "<br><br>Rain : " + json["current"]["rain"] + json["current_units"]["rain"];
        document.getElementById("public").style.boxShadow = "0px 0px 64px " + (json["current"]["is_day"] === 0 ? "#55F" : "#FF5");
        document.getElementById("public").style.borderRadius = "15px";
        document.getElementById("public").style.padding = "15px";
        document.getElementById("public").style.alignContent = "center";
        document.getElementById("public").style.textAlign = "center";
        document.getElementById("public").innerHTML += "<br><br><div style='display: flex; flex-direction: column; align-items: center;'><img style='aspect-ratio: 1; width: 50px; filter: drop-shadow(0px 0px 15px red); transform: rotate(" + json["current"]["wind_direction_10m"] + "deg);' src='https://static.thenounproject.com/png/306629-200.png'>" + json["current"]["wind_speed_10m"] + json["current_units"]["wind_speed_10m"] + "</div>"
    });
})

fetch(JSON_URL).then((response)=>{
    response.json().then((json)=>{
        employeeData = json;
        for (const employee of employeeData){
            const employeeDiv = document.createElement("div");
            for (const key in employee){
                const datum = document.createElement("p");
                datum.innerHTML = key + " : " + employee[key];
                datum.style.textAlign = "center";
                employeeDiv.appendChild(datum);
            }
            employeeDiv.style.padding = "15px"
            employeeDiv.style.borderRadius = "15px"
            employeeDiv.style.background = "#FFF1"
            document.getElementById("static").appendChild(employeeDiv);
            document.getElementById("static").style.display = "flex";
            document.getElementById("static").style.gap = "20px";
        }
    });
})

function switchDisplay(){
    displayType = !displayType;
    document.getElementById("static").innerHTML = "";
    if (displayType){
        for (const employee of employeeData){
            const employeeDiv = document.createElement("div");
            for (const key in employee){
                const datum = document.createElement("p");
                datum.innerHTML = key + " : " + employee[key];
                datum.style.textAlign = "center";
                employeeDiv.appendChild(datum);
            }
            employeeDiv.style.padding = "15px"
            employeeDiv.style.borderRadius = "15px"
            employeeDiv.style.background = "#FFF1"
            document.getElementById("static").appendChild(employeeDiv);
            document.getElementById("static").style.display = "flex";
            document.getElementById("static").style.gap = "20px";
        }
    } else {
        const TABLE = document.createElement("table");
        const THEAD = document.createElement("thead");
        for (const field in employeeData[0]){
            const FIELD = document.createElement("td");
            FIELD.innerHTML = field;
            THEAD.appendChild(FIELD);
        }
        TABLE.appendChild(THEAD);
        const TBODY = document.createElement("tbody");
        for (const employee of employeeData){
            const employeeRow = document.createElement("tr");
            for (const key in employee){
                const datum = document.createElement("td");
                datum.innerHTML = employee[key];
                datum.style.textAlign = "center";
                employeeRow.appendChild(datum);
            }
            employeeRow.style.gap = "10px";
            employeeRow.style.padding = "15px"
            employeeRow.style.borderRadius = "15px"
            employeeRow.style.background = "#FFF1"
            TBODY.appendChild(employeeRow);
        }
        TABLE.appendChild(TBODY);
        document.getElementById("static").appendChild(TABLE);
    }
}