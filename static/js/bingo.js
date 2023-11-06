window.onload = initAll;

var usedNums = new Array(25); // This array is used to keep track of used numbers

function initAll() {
  if (document.getElementById) {
    document.getElementById("reload").onclick = anotherCard;
    fillRandomSquares();
  }
  else{
    alert("Your browser does not support this script.");
  }
}

// function takeScreenshot() {
//   // Send a request to the server to capture a screenshot
//   console.log("took screenshot");
//   fetch('/capture-screenshot')
//       .then(response => response.text())
//       .then(data => {
//           alert(data); // Display a message when the screenshot is captured
//       });
//     }

function fillRandomSquares() {
    const numSquaresToFill = 15;
    const maxRow = 4; // Maximum row index (0 to 9)
    const maxCol = 4; // Maximum column index (0 to 9)

    // Create an array to keep track of filled square indices
    const filledSquares = [];

    // Generate and fill random squares
    while (filledSquares.length < numSquaresToFill) {
        const randomRow = Math.floor(Math.random() * (maxRow + 1));
        const randomCol = Math.floor(Math.random() * (maxCol + 1));
        const cellId = "square" + (randomRow * 5 + randomCol);

        // Check if the square is not already filled
        if (!filledSquares.includes(cellId)) {
            filledSquares.push(cellId);
            const cell = document.getElementById(cellId);
            cell.textContent = getNewNum();
            console.log() // You can set any content you like here
        }
    }
    // takeScreenshot();
}


function getNewNum() {
  let newNum;
  do {
      newNum = Math.floor(Math.random() * 25) + 1; // Generate a random number from 1 to 75
  } while (usedNums.includes(newNum)); // Repeat until a unique number is found
  usedNums.push(newNum);
  return newNum;
}

function anotherCard() {
  usedNums = [];
  newCard();
  return false;
}