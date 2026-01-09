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