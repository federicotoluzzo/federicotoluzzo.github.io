const API_URL = "https://api.open-meteo.com/v1/forecast?latitude=37.41166992482408&longitude=-122.07110349078079&current=temperature_2m,rain,wind_speed_10m,wind_direction_10m,is_day,relative_humidity_2m&timezone=auto&forecast_days=1";
const JSON_URL = "/example.json";

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

    });
})

