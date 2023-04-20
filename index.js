
function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(", ", " - ");
  timeDisplay.textContent = formattedString;
}
setInterval(refreshTime, 1000);

var api_key = 'b9d02b5a053194b54ec34746fd86542f';
results.loadhtml('http://api.openweathermap.org/data/2.5/weather?q=Montreal&mode=html&appid=' + api_key);
results.append("Weather For: " + weather_data.name + '<br/>');
results.append("Current: " + weather_data.main.temp + '&deg;F<br/>');
