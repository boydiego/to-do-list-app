// selecting elements
let list = $('#list');
let addButton = $('#button');

// callback functions
function addToDoItem() {
  let inputValue = $('#input').val();

  // creating elements
  let listItem = $('<li></li>')

  listItem.append(inputValue);
  list.append(listItem);
}

// event listeners
addButton.on('click', addToDoItem);