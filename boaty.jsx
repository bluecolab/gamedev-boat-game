/ Define variables
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var boatPosition = canvas.width / 2; // Start in the center of the canvas
var backgroundPosition = 0;
var backgroundSpeed = 2; // Change this to adjust speed
var boatSpeed = 5; // Change this to adjust speed

// Define function to draw the boat on the canvas
function drawBoat() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Draw the boat
  ctx.beginPath();
  ctx.rect(boatPosition, canvas.height - 50, 50, 50); // Adjust size and position as needed
  ctx.fillStyle = "blue"; // Adjust color as needed
  ctx.fill();
}

// Define function to move the boat based on mouse position
function moveBoat(event) {
  var canvasPosition = canvas.getBoundingClientRect();
  var mouseX = event.clientX - canvasPosition.left;
  if (mouseX >= 0 && mouseX <= canvas.width - 50) { // Make sure boat doesn't move off canvas
    boatPosition = mouseX;
  }
}

// Define function to animate the background
function animateBackground() {
  backgroundPosition += backgroundSpeed;
  if (backgroundPosition > canvas.height) { // Reset position once it reaches the bottom of the canvas
    backgroundPosition = 0;
  }
  ctx.fillStyle = "green"; // Change color and image as needed
  ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill with color or image
  ctx.fillStyle = "white"; // Change color as needed
  ctx.fillRect(0, backgroundPosition, canvas.width, 10); // Draw a line for the "water"
}

// Define function to update the game every frame
function update() {
  animateBackground();
  drawBoat();
  requestAnimationFrame(update); // Call this function again on the next frame
}

// Add event listener to move boat when mouse is moved
canvas.addEventListener("mousemove", moveBoat);

// Call the update function to start the game loop
update();
