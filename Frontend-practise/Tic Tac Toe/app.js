// Select all boxes and reset button
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

// Player turn (true = X, false = O)
let turnX = true;
let moveCount = 0;

// Winning patterns
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Add click event to each box
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText !== "") return;

        if (turnX) {
            box.innerText = "X";
            turnX = false;
        } else {
            box.innerText = "O";
            turnX = true;
        }

        box.style.pointerEvents = "none";
        moveCount++;

        if (!checkWinner() && moveCount === 9) {
            alert("🤝 Game is Draw!");
        }
    });
});

// Check winner
function checkWinner() {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 && pos1 === pos2 && pos2 === pos3) {
            alert(`🎉 Player ${pos1} Wins!`);
            disableBoxes();
            return true;
        }
    }
    return false;
}

// Disable all boxes after win
function disableBoxes() {
    boxes.forEach((box) => {
        box.style.pointerEvents = "none";
    });
}

// Reset game
resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.style.pointerEvents = "auto";
    });
    turnX = true;
    moveCount = 0;
});
