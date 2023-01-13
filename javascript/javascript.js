let navbar
let header

document.addEventListener("DOMContentLoaded", function() {
    // Get the navbar and header elements
    navbar = document.getElementById("navbar");
    header = document.getElementById("hero-image");
    // Your code here
    // Listen for the scroll event on the window
    window.addEventListener("scroll", updateHeader)
});

function updateHeader() {
  // Get the current scroll position
  var scroll = window.scrollY;
  
  // If the scroll position is greater than 50
  if (scroll > 50) {
    // Add the "scrolled" class to the navbar and header
    navbar.classList.add("scrolled");
    header.classList.add("scrolled");
    console.log('add')
  } else {
    // Remove the "scrolled" class from the navbar and header
    navbar.classList.remove("scrolled");
    header.classList.remove("scrolled");
    console.log('remove')

  }
};
