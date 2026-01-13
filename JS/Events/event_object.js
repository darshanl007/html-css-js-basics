// Function to log the complete event object
function showEvent(e) {
    console.log(e); // Shows full event details
}

// Selecting button for mouse click event
let btn = document.querySelector("#btn");

// Mouse click event using onclick property
btn.onclick = (event) => {
    console.log("Event Type:", event.type);     // Type of event (click)
    console.log("Target:", event.target);       // Element that triggered event
    console.log("X Position:", event.clientX);  // Mouse X coordinate
    console.log("Y Position:", event.clientY);  // Mouse Y coordinate
};

// Selecting input field for keyboard event
let input = document.querySelector("#input");

// Keydown event to detect pressed keys
input.onkeydown = (event) => {
    console.log("Key Pressed:", event.key); // Key pressed by user
};

// Function to prevent default link navigation
function stopLink(e) {
    e.preventDefault(); // Stops opening Google
    alert("Link Click Prevented");
}