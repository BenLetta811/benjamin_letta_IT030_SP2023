// Get the current time
const now = new Date();

// Get the current hour
const hour = now.getHours();

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
const greetingElement = document.getElementById('greeting');
if (greetingElement) {
  greetingElement.textContent = greeting;
}
/*-----------------------------------------------*/
function checkViewportWidth() {
  const width = window.innerWidth;
  const footer = document.querySelector("footer");
  let message = "";

  if (width < 568) {
    message = "You are currently on a mobile device";
  } else if (width < 769) {
    message = "You are on a tablet device";
  } else {
    message = "Desktop devices are the best to view my website";
  }

  footer.innerHTML = message;
}

// Call the function on page load and whenever the viewport is resized
window.addEventListener("load", checkViewportWidth);
window.addEventListener("resize", checkViewportWidth);