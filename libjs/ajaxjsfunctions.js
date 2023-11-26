function getCurrentCityweather(elementID){
    
    var xmlhttp=new XMLHttpRequest();

    console.log("ajax current city weather started!");

    xmlhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){  
            
            const obj = JSON.parse(this.responseText);
            getWeather(obj.city, elementID, 1);      
  
        }
    }

    let query="https://ipapi.co/json/";
    xmlhttp.open("GET", query, true);
    xmlhttp.send();
}

function getWeather(city, elementID, flag=0){

    var xmlhttp=new XMLHttpRequest();

    console.log("ajax weather started!");

    xmlhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){  
            
            const obj = JSON.parse(this.responseText);

            let resultStr = "<br>Город: "+city;
            if(flag){
                resultStr = "<br>Город (определен автоматически): "+city;
            }
            resultStr =resultStr+"<br>Температура: "+obj.main.temp+" градусов цельсия";
            resultStr =resultStr+"<br>Влажность: "+obj.main.humidity+"%";
            let pressure=Math.round(obj.main.pressure/1.333);
            resultStr =resultStr+"<br>Давление: "+pressure+" мм.рт. столба";
            
            console.log("result:"+resultStr);
           document.getElementById(elementID).innerHTML=resultStr;         
           
        }
    }   
    
    console.log("город:"+city);
    let query="https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=3142a54243e071c4224117439370a564";
    xmlhttp.open("GET", query, true);
    xmlhttp.send();


}

function showResult(str, elementID){

    if(str.length==0){
        document.getElementById(elementID).innerHTML="";
        return;
    }
    var xmlhttp=new XMLHttpRequest();

    xmlhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            document.getElementById(elementID).innerHTML=this.responseText;            
           
        }
    }

    xmlhttp.open("GET", "livesearch.php?q="+str, true);
    xmlhttp.send();
}

function clearElement(elementID){

    document.getElementById(elementID).innerHTML="";
    return;
}