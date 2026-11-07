const params = new URLSearchParams(window.location.search);
const name = params.get("name");
if (name) {
  document.getElementById("greeting").textContent =
    "Thank you, " + name + "! Your submission has been received. We will get back to you shortly.";
}

let seconds = 5;
const countdown = document.getElementById("countdown");

const timer = setInterval(function () {
  seconds--;
  countdown.textContent = seconds;
  if (seconds <= 0) {
    clearInterval(timer);
    window.location.href = "PROJ HOME.html";
  }
}, 1000);