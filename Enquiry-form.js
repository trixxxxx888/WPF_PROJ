const form = document.getElementById("enquiryForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const number = document.getElementById("Number").value.trim();
  const enquiry = document.getElementById("enquiry").value.trim();

  if (!/^\d{8,15}$/.test(number)) {
    showMessage("Please enter a valid phone number (8 to 15 digits).", "error");
    return;
  }
  if (enquiry.length < 10) {
    showMessage("Please write at least 10 characters in your enquiry.", "error");
    return;
  }

  showMessage("Enquiry submitted successfully! Redirecting...", "success");
  setTimeout(function () {
    form.submit(); // sends the form data to Thank-you-page.html
  }, 1500);
});

function showMessage(text, type) {
  message.textContent = text;
  message.className = type;
}