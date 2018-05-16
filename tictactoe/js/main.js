// what's left?
// 1. checking for winner
    // alert the winner when someone wins.
// 2. making buttons only clickable once
// 3. BONUS: a reset button (that doesn't just refresh page)

var board = document.getElementById('board')
var currentMarker = "O"

// using a for loop, create 9 <div>'s inside the board that have the class "box"
for(var i = 0; i < 9; i += 1) {
  var box = document.createElement('div')
  box.classList.add('box')
  board.appendChild(box)
}

var boxes = document.getElementsByClassName('box')
// another for loop to go through all of the boxes 
// and add a click event listener
// when they are clicked, they should print "clicked" to the console
for(var i = 0; i < boxes.length; i += 1) {
  boxes[i].addEventListener("click", clickBox)
}

function clickBox() {
  // alternate between X and O when click
  this.innerText = currentMarker
  
  if(currentMarker === "O") {
    currentMarker = "X"
  } else {
    currentMarker = "O"
  }
}