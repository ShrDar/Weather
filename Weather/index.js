function displayweather(data){
    console.log(data);
    time=data.weather[0].icon;
    console.log(time[2]);
    cityname=data.name;
    document.getElementById("city").innerHTML=cityname;
    temperature=parseInt(data.main.temp);
    document.getElementById("temp").innerHTML=temperature+"°C";
    condition=data.weather[0].main;
    con1=data.weather[0].description;
    console.log(condition);
if(time[2]=="d"){
    document.getElementById("container").style.background="var(--daycontainerbg)";
    document.getElementById("container").style.color="#000";
    document.getElementById("container").style.border="1px solid #000";
    document.body.style.background="var(--daybg)";
    if(condition=="Clouds"){
        document.getElementById("status").innerHTML="Cloudy";
        document.getElementById("weather-icon").src="Pictures/mostlycloudy.png";
        if(con1=="few clouds"){
            document.getElementById("status").innerHTML="Mostly Sunny";
            document.getElementById("weather-icon").src="Pictures/mostlysunny.png";
        }
        if(con1=="overcast clouds"){
            document.getElementById("status").innerHTML="Overcast Clouds";
            document.getElementById("weather-icon").src="Pictures/cloudy.png";
        }
    }
    else if(condition=="Clear"){
        document.getElementById("status").innerHTML="Sunny";
        document.getElementById("weather-icon").src="Pictures/sunny.png";
    }
    else if(condition=="Haze"){
        document.getElementById("status").innerHTML="Hazy";
        document.getElementById("weather-icon").src="Pictures/haze.png";
    }
    else if(condition=="Snow"){
        document.getElementById("status").innerHTML="Snowy";
        document.getElementById("weather-icon").src="Pictures/snowy.png";
    }
    else if(condition=="Rain"){
        document.getElementById("status").innerHTML="Rainy";
        document.getElementById("weather-icon").src="Pictures/rainy.png";
    }
    else if(condition=="Fog"){
        document.getElementById("status").innerHTML="Foggy";
        document.getElementById("weather-icon").src="Pictures/foggy.png";
    }
}
else if(time[2]=="n"){
    document.getElementById("container").style.background="var(--nightcontainerbg)";
    document.getElementById("container").style.color="#fff";
    document.getElementById("container").style.border="1px solid #878787";
    document.body.style.background="var(--nightbg)"
    if(condition=="Clouds"){
        document.getElementById("status").innerHTML="Cloudy";
        document.getElementById("weather-icon").src="Pictures/mostlycloudymoon.png";
        if(con1=="few clouds"){
            document.getElementById("status").innerHTML="Few Clouds";
            document.getElementById("weather-icon").src="Pictures/fewcloudsnight.png";
        }
        if(con1=="overcast clouds"){
            document.getElementById("status").innerHTML="Overcast Clouds";
            document.getElementById("weather-icon").src="Pictures/cloudy.png";
        }
    }
    else if(condition=="Clear"){
        document.getElementById("status").innerHTML="Clear Night";
        document.getElementById("weather-icon").src="Pictures/moon.png";
    }
    else if(condition=="Haze"){
        document.getElementById("status").innerHTML="Hazy";
        document.getElementById("weather-icon").src="Pictures/hazenight.png";
    }
    else if(condition=="Snow"){
        document.getElementById("status").innerHTML="Snowy";
        document.getElementById("weather-icon").src="Pictures/snowy.png";
    }
    else if(condition=="Rain"){
        document.getElementById("status").innerHTML="Rainy";
        document.getElementById("weather-icon").src="Pictures/rainy.png";
    }
    else if(condition=="Fog"){
        document.getElementById("status").innerHTML="Foggy";
        document.getElementById("weather-icon").src="Pictures/foggy.png";
    }
}
    try{
    rainn=data.rain["1h"];
    document.getElementById("rainp").innerHTML=rainn+" mm";
    }
    catch(err){
        document.getElementById("rainp").innerHTML="-";
    }
    humid=data.main.humidity;
    document.getElementById("humidp").innerHTML=humid+"%";
    windd=data.wind.speed;
    document.getElementById("windp").innerHTML=windd+" m/s";
}
function fetchweather(query){
    var url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&units=metric&appid=6a818ed018625b3d21872652e4c1dd4e";

    fetch(url)
    .then((response) => response.json())
    .then((data) => displayweather(data))
    .catch(function notfound(){
        document.getElementById("city").innerHTML="Not Found";
        document.getElementById("temp").innerHTML="-";
        document.getElementById("status").innerHTML="---";
        document.getElementById("weather-icon").src="Pictures/notfound.png";
        document.getElementById("rainp").innerHTML="--";
        document.getElementById("humidp").innerHTML="--";
        document.getElementById("windp").innerHTML="--";
    });
}
function searched(callback){
    temp=document.getElementById("search").value;
    if(temp!=""){
        value=document.getElementById("search").value;
        console.log(value);
        callback(value);
    }
    else{
        value="tuskegee";
        console.log(value);
        callback(value);
    }
}
var input=document.getElementById("search");
input.addEventListener("keypress",function(event){
    if(event.key=="Enter"){
        event.preventDefault();
        document.getElementById("sbutton").click();
    }
});
searched(fetchweather);

