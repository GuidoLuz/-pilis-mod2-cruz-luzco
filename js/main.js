
var date = new Date();
result = date.toLocaleDateString()+" "+date.getHours()+":"+date.getMinutes();
document.getElementById('fecha').textContent=result;



let lat="-24.18325";
let lon="-65.33134";
let key="ef5d92068b330ed987c647483bae0d6b";
let lang="sp"; 
let api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=${lang}`;

async function getClima(){
    try{
        let response = await fetch(api);
        let ipResponse = await response.json();

        let name=ipResponse.name;
        let country=ipResponse.sys.country;
        console.log(name);
        document.getElementById('ciudad').textContent=name+" - "+country;

        let temp=ipResponse.main.temp - 273.15; 
        document.getElementById('temperatura').textContent=temp.toFixed(0)+"°C";

        let icon=ipResponse.weather[0].icon;
        var img=`http://openweathermap.org/img/wn/${icon}@2x.png`;
        document.getElementById('imgClima').src=img;

        let description=ipResponse.weather[0].description;
        document.getElementById('descripcion').textContent=description;

        let humidity=ipResponse.main.humidity;
        document.getElementById('humedad').textContent="Humedad: "+humidity+"%";

        let visibility=ipResponse.visibility * 0.001; 
        document.getElementById('visibilidad').textContent="Visibilidad: "+visibility+"Km";
    
        let wind=ipResponse.wind.speed;
        document.getElementById('viento').textContent="Velocidad del viento "+wind+"km/h";
    
    }catch{
        console.log("Algo paso, no se pudo resolver....");
    }
}
getClima();