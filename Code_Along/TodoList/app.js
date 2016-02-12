//setting up -- grabbing things
// grab the form element
var form = document.querySelector("#new-todo-item-form");
// grab the input element
var input = document.querySelector("#new-todo-item-input");
// grab the parent element
var parent = document.querySelector("#todo-list");

// create function to add things to list
// use parameter to capture something on screen
//
function addListItem(todo){
// identify the parent (ul)
// create more children (li)
  var listItem = document.createElement("li");
  listItem.textContent = todo;
// place input.value inside the newly child element
// now, we append this new child+input.value onto parent
  parent.appendChild(listItem);
}
// function "when you submit this form"
function formSubmitted(event){
// prevent the default action of this event
  event.preventDefault();
// run the "addint stuff to the list"
  addListItem(input.value);
// reset the form?
  form.reset();
}
// add event listener
form.addEventListener("submit",formSubmitted)
