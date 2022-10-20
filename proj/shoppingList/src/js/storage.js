export const saveToStore = function ({ shoppingList, completeList }) {
  window.localStorage.setItem(
    'shoppingApp_active',
    JSON.stringify(shoppingList)
  );

  window.localStorage.setItem(
    'shoppingApp_completed',
    JSON.stringify(completeList)
  );
};

export const getFromStore = function () {
  const getActive = window.localStorage.getItem('shoppingApp_active');
  const getCompleted = window.localStorage.getItem('shoppingApp_completed');

  return {
    getActive: getActive ? JSON.parse(getActive) : [],
    getCompleted: getCompleted ? JSON.parse(getCompleted) : [],
  };
};
