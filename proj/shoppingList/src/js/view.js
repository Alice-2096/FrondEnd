import Item from './Item';
import { getShoppingList, getCompletedList } from './model';

const shoppingListDiv = document.querySelector('.shopping-list');
const completedDiv = document.querySelector('.completed');

// use 'map' to convert ea ch item in the shopping list to the HTML markup
export const renderShoppingList = () => {
  const domNodes = getShoppingList().map(({ item, priority, id }) => {
    return Item(item, priority, id);
  });

  shoppingListDiv.innerHTML = domNodes.join(''); //join the list of HTML all together
};

export const renderCompletedList = () => {
  const domNodes = getCompletedList().map(({ item, priority, id }) => {
    return Item(item, priority, id);
  });

  completedDiv.innerHTML = domNodes.join('');
};
