// selecting elements
let addButton = $('#button');

// callback function to add item
function addToDoItem() {
  // CREATING ITEMS
  let inputValue = $('#input').val();
  let list = $('#list');

  let listItem = $('<li></li>');
  let crossOutButton = $('<button>X</button>');

  listItem.append(inputValue).append(crossOutButton);
  list.append(listItem);

  // DELETING ITEMS
  function deleteItem() {
    crossOutButton.parent().remove();
  }

  crossOutButton.on('click', deleteItem);

  // CROSSING OUT ITEMS
  function crossOutItem() {
    $(this).toggleClass('strike');
  }

  listItem.on('dblclick', crossOutItem);

  // CHANGE ORDER OF ITEMS
  list.sortable();
}

// event listener to add item
addButton.on('click', addToDoItem);
