const bars = document.getElementById('bars');
const menu = document.getElementById('nav-list');

bars.addEventListener('click', e => {
  menu.classList.toggle('show-list');
})