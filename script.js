 const API="3347de6cca572ebd3d358ae40a07b48a";
 async function getWeather()
 {
  let city = document.getElementById("city").value;
  let result = document.getElementById("result");

  if(city === ""){
    result.innerHTML = "Please enter city name";
    return;
  }
  result.innerHTML="Loding...";

  try{
   const API= "3347de6cca572ebd3d358ae40a07b48a";
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`;

   const response=await fetch(url);
   const data=await response.json();
    if(data.code === "404")
      {
      result.innerHTML = "City not found ";
      return;
      }
      result.innerHTML = `
        <h3>.${data.name}</h3>
        <p>Temp: ${data.main.temp} °C</p>
        <p> Weather: ${data.weather[0].main}</p>
      `;
    }
  catch(error){
    result.innerHTML = "Error fetching data ";
}
 }
