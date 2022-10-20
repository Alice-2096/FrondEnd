import {
  addToShoppingList,
  setPriority,
  removeItem,
  addToCompletedList,
  clearCompleted,
  bootUp,
} from './model';
import { renderShoppingList, renderCompletedList } from './view';

const itemInput = document.querySelector("input[name='itemInput']");
const shoppingListDiv = document.querySelector('.shopping-list');
const completedDiv = document.querySelector('.completed');
const clearCompletedBtn = document.querySelector('#clear-completed');

itemInput.addEventListener('keyup', function (evt) {
  if (evt.key === 'Enter') {
    // Add to shopping list
    addToShoppingList(this.value); //can also do 'evt.target.value' -- refers to the input field
    // Update the view
    renderShoppingList();
    this.value = '';
  }
});

// Take advantage of event bubbling
shoppingListDiv.addEventListener('click', function (evt) {
  // Priority
  if (evt.target.parentElement.classList.contains('priority-control')) {
    //if the user is trying to set the priority of the list
    const priority = evt.target.classList.value;
    const itemId =
      evt.target.parentElement.parentElement.getAttribute('data-id');

    // Set priority
    setPriority(itemId, priority);
    // Render View
    renderShoppingList();
  }

  // Remove
  if (evt.target.classList.contains('remove-btn')) {
    const itemId = evt.target.parentElement.getAttribute('data-id');
    // If the item is removed, update the view
    if (removeItem(itemId)) {
      renderShoppingList();
    }
  }
});

shoppingListDiv.addEventListener('dragstart', function (evt) {
  if (evt.target.classList.contains('item')) {
    const getId = evt.target.getAttribute('data-id');
    evt.dataTransfer.setData('text/plain', getId);
  }
});

completedDiv.addEventListener('drop', function (evt) {
  const itemId = evt.dataTransfer.getData('text/plain');

  if (itemId) {
    // Add to completed list
    addToCompletedList(itemId);
    // Update shopping list
    renderShoppingList();
    // Update completed tasks list
    renderCompletedList();
  }
});

completedDiv.addEventListener('dragover', function (evt) {
  evt.preventDefault();
});

clearCompletedBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  clearCompleted();
  renderCompletedList();
});

// will do this everytime the web page is reloaded
() => {
  bootUp;
  renderShoppingList();
  renderCompletedList();
};
