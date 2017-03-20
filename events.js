// Don't change or delete this line! It waits until the DOM has loaded, then calls
// the start function. More info:
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  // The first example is done for you. This will change the background colour of the first div
  // when you mouse over it.
  one()
  two()
  three()
  four()

  // Your turn! Create a new function called `two`, then call it from here.
}

function one () {
  var one = document.getElementById('one')
  one.addEventListener('mouseenter', makeBlue)
  one.addEventListener('mouseleave', makeWhite)
}

function two () {
  var two = document.getElementById('two');
  two.addEventListener('mouseenter', makeGreen)
  two.addEventListener('mouseleave', makeWhite)
}

function three () {
  var three = document.getElementById('three');
  three.addEventListener('mouseenter', makePurple)
  three.addEventListener('mouseleave', makeWhite)
}

function four () {
  var four = document.getElementById('four');
  four.addEventListener('click', borderBlack)
}


function makeBlue (evt) {
  evt.target.style.backgroundColor = 'blue'
}

function makeWhite (evt) {
  evt.target.style.backgroundColor = 'white'
}

function makeGreen (evt) {
  evt.target.style.backgroundColor = 'green'
}

function makePurple (evt) {
  evt.target.style.backgroundColor = 'purple'
}

function borderBlack (evt) {
  evt.target.style.borderColor = "black"
}
