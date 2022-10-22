const sideBar = document.querySelector('.sidebar-container');
const upperrightBtn = document.querySelector('.sidebar-btn');
const insideCloseBtn = document.querySelector('.sidebar-close-btn');

upperrightBtn.addEventListener('click', () => {
  //   if (sideBar.classList.contains('sidebar-container-show'))
  //     sideBar.classList.remove('sidebar-container-show');
  //   else sideBar.classList.add('sidebar-container-show');

  //a faster way: use toggle
  sideBar.classList.toggle('sidebar-container-show');
});

insideCloseBtn.addEventListener('click', () => {
  sideBar.classList.remove('sidebar-container-show');
});
