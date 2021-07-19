window.onload = function () {
  setInterval(getTime, 1000);
};

function getTime() {
  let Time = new Date();
  document.getElementById("hour").innerText = tranform(Time.getHours());
  document.getElementById("minute").innerText = tranform(Time.getMinutes());
  document.getElementById("second").innerText = tranform(Time.getSeconds());
}

function tranform(value) {
  if (value.toString().length === 1) value = "0" + value;
  return value;
}
