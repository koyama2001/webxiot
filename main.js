window.onload = mainFunction;

function mainFunction() {
  var onoff = document.getElementById("onoff");
  onoff.onclick = controlLed;
}

var v = 0;
function controlLed() {
  v = v === 0 ? 1 : 0;
  var ledView = document.getElementById("ledView");
  ledView.style.backgroundColor = v === 1 ? "red" : "black";
}
