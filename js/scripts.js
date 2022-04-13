// selecting elements
let addButton = $('#button');

// callback function to add item
function addToDoItem() {
  // CREATING ITEMS
  let inputValue = $('#input').val();
  let list = $('#list');

  let listItem = $('<li></li>');
  let deleteButton = $('<crossOutButton>X</crossOutButton>');

  if (inputValue === '') {
    alert("👇 Don't forget to add a to do");
  } else {
    listItem.append(inputValue).append(deleteButton);
    list.append(listItem);
  }

  // DELETING ITEMS
  function deleteItem() {
    deleteButton.parent().remove();
  }

  deleteButton.on('click', deleteItem);

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
