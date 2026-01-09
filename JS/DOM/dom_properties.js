// Selecting elements
let title = document.getElementById("title");
let container = document.getElementById("container");
let para = document.getElementById("para");
let input = document.getElementById("inputBox");
let checkbox = document.getElementById("checkBox");
let button = document.getElementById("btn");

// Content Properties
title.textContent = "Updated using textContent";
para.innerText = "Changed using innerText";
container.innerHTML = container.innerHTML + "<p>Added using innerHTML</p>";
console.log(title.tagName);
console.log(container.tagName);
console.log(para.tagName);

console.log("-------------------------");

// Style properties
container.style.backgroundColor = "lightgreen";
container.style.borderRadius = "8px";
container.style.fontSize = "18px";

// Form properties
input.value = "Darshan";
checkbox.checked = true;
button.disabled = false;

// Node traversal properties
console.log(container.parentElement);      // body
console.log(container.children);           // all child elements
console.log(container.firstElementChild);  // first child
console.log(container.lastElementChild);   // last child

console.log("---------------------------");

// Size properties
console.log(container.offsetWidth);
console.log(container.offsetHeight);

// Event property
button.onclick = function () {
    alert("Hello " + input.value);
};