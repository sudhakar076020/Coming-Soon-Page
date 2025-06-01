

// Countdown Timer Script
// This script creates a countdown timer that counts down to a specific date and time.

var countdownDate = new Date("January 01, 2026 00:00:00").getTime(); // Set a time when the countdown ends future time
var x = setInterval(function() {
  var now = new Date().getTime(); // Get the current time
  // Calculate the distance between now and the countdown date
  var distance = countdownDate - now;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if(distance < 0){
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    
    document.getElementById("timeEnd").innerHTML = "Flash Deal Ended!";
  }

}, 1000);



// Email Validation Script

const emailEl = document.getElementById("Email");
const emailErrorMsg = document.getElementById("emailErrMsg");

function validateEmail() {
    const emailValue = emailEl.value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailValue)) {
        emailErrorMsg.textContent = "Please enter a valid email.";
        return false;
    } else {
        emailErrorMsg.textContent = "";
        return true;
    }
}

emailEl.addEventListener("blur", validateEmail);
emailEl.addEventListener("input", validateEmail);

function validateForm(event) {
    let isValid = true;
    if (!validateEmail()) isValid = false;
    if (!isValid) {
        event.preventDefault();

        emailErrorMsg.textContent = "";
    }
}

myFormEl.addEventListener("submit", validateForm);



