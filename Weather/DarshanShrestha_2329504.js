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
        document.getElementById("weather-icon").src="mostlycloudy.png";
        if(con1=="few clouds"){
            document.getElementById("status").innerHTML="Mostly Sunny";
            document.getElementById("weather-icon").src="mostlysunny.png";
        }
        if(con1=="overcast clouds"){
            document.getElementById("status").innerHTML="Overcast Clouds";
            document.getElementById("weather-icon").src="cloudy.png";
            document.getElementById("container").style.background="var(--overcastcontainerbg)";
            document.body.style.background="var(--overcastbg)";
        }
    }
    else if(condition=="Clear"){
        document.getElementById("status").innerHTML="Sunny";
        document.getElementById("weather-icon").src="sunny.png";
    }
    else if(condition=="Haze"){
        document.getElementById("status").innerHTML="Hazy";
        document.getElementById("weather-icon").src="haze.png";
        document.getElementById("container").style.background="var(--hazycontainerbg)";
        document.body.style.background="var(--hazybg)";

    }
    else if(condition=="Snow"){
        document.getElementById("container").style.background="var(--snowycontainerbg)";
        document.getElementById("container").style.color="#fff";
        document.getElementById("container").style.border="1px solid #000";
        document.body.style.background="var(--snowybg)";

        document.getElementById("status").innerHTML="Snowy";
        document.getElementById("weather-icon").src="snowy.png";
    }
    else if(condition=="Rain"){
        document.getElementById("status").innerHTML="Rainy";
        document.getElementById("weather-icon").src="rainy.png";
    }
    else if(condition=="Fog"){
        document.getElementById("status").innerHTML="Foggy";
        document.getElementById("weather-icon").src="foggy.png";
    }
    else if(condition=="Smoke"){
        document.getElementById("container").style.background="var(--smokycontainerbg)";
        document.getElementById("status").innerHTML="Smoky";
        document.getElementById("container").style.color="#fff";
        document.getElementById("weather-icon").src="smoky.png";
        document.body.style.background="var(--smokybg)";
    }
    else if(condition=="Drizzle"){
        document.getElementById("status").innerHTML="Drizzly";
        document.getElementById("weather-icon").src="drizzly.png";
    }
    else if(condition=="Mist"){
        document.getElementById("status").innerHTML="Misty";
        document.getElementById("weather-icon").src="drizzly.png";
    }
    else{
        document.getElementById("status").innerHTML=condition;
        
    }
}
else if(time[2]=="n"){
    document.getElementById("container").style.background="var(--nightcontainerbg)";
    document.getElementById("container").style.color="#fff";
    document.getElementById("container").style.border="1px solid #878787";
    document.body.style.background="var(--nightbg)"
    if(condition=="Clouds"){
        document.getElementById("status").innerHTML="Cloudy";
        document.getElementById("weather-icon").src="mostlycloudymoon.png";
        if(con1=="few clouds"){
            document.getElementById("status").innerHTML="Few Clouds";
            document.getElementById("weather-icon").src="fewcloudsnight.png";
        }
        if(con1=="overcast clouds"){
            document.getElementById("status").innerHTML="Overcast Clouds";
            document.getElementById("weather-icon").src="cloudy.png";
        }
    }
    else if(condition=="Clear"){
        document.getElementById("status").innerHTML="Clear Night";
        document.getElementById("weather-icon").src="moon.png";
    }
    else if(condition=="Haze"){
        document.getElementById("status").innerHTML="Hazy";
        document.getElementById("weather-icon").src="hazenight.png";
    }
    else if(condition=="Snow"){
        document.getElementById("status").innerHTML="Snowy";
        document.getElementById("weather-icon").src="snowy.png";
    }
    else if(condition=="Rain"){
        document.getElementById("status").innerHTML="Rainy";
        document.getElementById("weather-icon").src="rainy.png";
    }
    else if(condition=="Fog"){
        document.getElementById("status").innerHTML="Foggy";
        document.getElementById("weather-icon").src="foggy.png";
    }
    else if(condition=="Thunderstorm"){
        document.getElementById("status").innerHTML="Thunderstorm";
        document.getElementById("weather-icon").src="thunderstorm.png";
    }
    else if(condition=="Smoke"){
        document.getElementById("container").style.background="var(--smokycontainerbg)";
        document.getElementById("status").innerHTML="Smoky";
        document.getElementById("container").style.color="#fff";
        document.getElementById("weather-icon").src="smoky.png";
        document.body.style.background="var(--smokybg)";
    }
    else if(condition=="Drizzle"){
        document.getElementById("status").innerHTML="Drizzly";
        document.getElementById("weather-icon").src="drizzly.png";
    }
    else if(condition=="Mist"){
        document.getElementById("status").innerHTML="Misty";
        document.getElementById("weather-icon").src="misty.png";
    }
    else{
        document.getElementById("status").innerHTML=condition;
        
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
        document.getElementById("weather-icon").src="notfound.png";
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
function loading(){
    document.getElementById("container").style.transform="scale(0)";
    searched(fetchweather);
    setTimeout(function(){
        document.getElementById("container").style.transform="scale(1.3)";
    },800);
}
function time(){
    let d= new Date();
        month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        for(let i=0;i<12;i++){
            if(d.getMonth()==i){
                date=month[i]+" "+d.getDate()+", "+d.getFullYear();
                document.getElementById("date").innerHTML=date;
            }
        }
}
searched(fetchweather);
time();

