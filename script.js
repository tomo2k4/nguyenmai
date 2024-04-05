// Get the modal
var loginModal = document.getElementById("loginModal");
var registerModal = document.getElementById("registerModal");

// Get the button that opens the modal
var loginBtn = document.getElementById("loginBtn");
var registerBtn = document.getElementById("registerBtn");

// Get the <span> element that closes the modal
var loginClose = document.getElementsByClassName("close")[0];
var registerClose = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal 
loginBtn.onclick = function() {
  loginModal.style.display = "block";
}

registerBtn.onclick = function() {
  registerModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
loginClose.onclick = function() {
  loginModal.style.display = "none";
}

registerClose.onclick = function() {
  registerModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == loginModal || event.target == registerModal) {
    loginModal.style.display = "none";
    registerModal.style.display = "none";
  }
}
