const params = new URLSearchParams(window.location.search);
const name = params.get("name");
if (name) {
  document.getElementById("greeting").textContent =
    "Thank you, " + name + "! Your enquiry has been received. We will be in touch soon.";
}

let seconds = 5;
const countdown = document.getElementById("countdown");

const timer = setInterval(function () {
  seconds--;
  countdown.textContent = seconds;
  if (seconds <= 0) {
    clearInterval(timer);
    window.location.href = "index.html";
  }
}, 1000);