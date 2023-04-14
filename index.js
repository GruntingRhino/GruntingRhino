function refreshTime() {
  var datetime = new Date();
  console.log(datetime);
  document.getElementById("time").textContent = datetime;
}
setInterval(refreshTime, 1000);
