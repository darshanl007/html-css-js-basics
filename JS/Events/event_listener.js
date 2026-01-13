// Selecting Button 1
let btn1 = document.querySelector("#btn1");

// Multiple click handlers on same button
btn1.addEventListener("click", (evt) => {
    console.log("Button is clicked");
    console.log(evt.type);   // click
    console.log(evt.target); // button
});

btn1.addEventListener("click", () => {
    console.log("Button Handler 1");
});

btn1.addEventListener("click", () => {
    console.log("Button Handler 2");
});

// Adding handler 3 to btn1 event
const handler3 = () =>{
    console.log("Button was clicked - handler 3");
}
btn1.addEventListener("click", handler3);

// Selecting Button 2
let btn2 = document.querySelector("#btn2");

// Double click event
btn2.addEventListener("dblclick", () => {
    alert("Double Click Working...");
});

// Selecting div
let div = document.querySelector("div");

// Mouse over event
div.addEventListener("mouseover", () => {
    console.log("You are inside div box...");
});

// Selecting div 2
let div2 = document.querySelector("#div2");

// Mouse out event
div2.addEventListener("mouseout", () => {
    alert("Mouse left the box...");
});

// Remove event
btn1.removeEventListener("click", handler3);