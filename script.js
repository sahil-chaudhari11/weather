
const apiKey="5e392d74865c10529b3d456ac3b75753";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon")
// const gird = document.querySelector('#gird'); // Change '#gird' to the actual selector for the 'gird' element
// const search = document.querySelector('#searchInput'); // Change '#searchInput' to the actual selector for the input element



async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
        var data =await response.json();

    }
    

   

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) +"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.jpg";
    }   

    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png";
    }

    else if(data.weather[0].main=="Haze"){
        weatherIcon.src="images/rain.webp";
    }

    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png";
    }

    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.jpeg";
    }

    document.querySelector(".weather").style.display="block"
    document.querySelector(".error").style.display="none";




}

//remove button

function showicon(){
    const username=document.querySelector(".username").value
    const img=document.querySelector(".img");

   
    


    if(username.length<=0)
        {
        document.body.classList.remove(".active");
        }
    else{ 
        
        document.body.classList.add(".active");
    }

    img.addEventListener("click",()=>{
        document.querySelector(".username").value="";
        document.body.classList.remove("active")
    })

}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

   //voice search

   const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

   if (SpeechRecognition) {
       const recog = new SpeechRecognition();
       recog.lang = 'en-US';
       
       const startButton = document.getElementById('voice-search');
       const searchBox = document.querySelector('.search input');
   
       if (startButton && searchBox) { 
           startButton.addEventListener('click', () => {
               recog.start();
           });
   
           recog.onresult = (event) => {
            let str = event.results[0][0].transcript.slice(0,event.results[0][0].transcript.length-1);
            searchBox.value=str
          
               
           };
   
           recog.onerror = (event) => {
               console.error('Speech recognition error:', event.error);
           };
   
           recog.onend = () => {
               console.log('Speech recognition ended');
           };
       } else {
           console.error('Start button or search input not found');
       }
   } else {
       console.log('Speech recognition not supported');
   }
   

   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   

    