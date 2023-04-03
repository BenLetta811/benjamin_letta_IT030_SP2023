// Get the current time
var now = new Date();

// Get the current hour
var hour = now.getHours();

// Set the greeting message based on the current hour
let greeting = '';
if (hour < 12) {
  greeting = 'Good morning';
} else if (hour < 16) {
  greeting = 'Good afternoon';
} else if (hour < 20) {
  greeting = 'Good evening';
} else {
  greeting = 'Good night';
}

// Display the greeting message on the page
var greetingElement = document.getElementById('greeting');
if (greetingElement) {
  greetingElement.textContent = greeting;
}
/*-----------------------------------------------*/
function checkViewportWidth() {
  var width = window.innerWidth;
  var footer = document.querySelector("footer");
  let message = "";

  if (width < 768) {
    message = "You are currently on a mobile device";
  } else if (width < 1024) {
    message = "You are on a tablet device";
  } else {
    message = "Desktop devices are the best to view my website";
  }

  footer.innerHTML = message;
}

// Call the function on page load and whenever the viewport is resized
window.addEventListener("load", checkViewportWidth);
window.addEventListener("resize", checkViewportWidth);