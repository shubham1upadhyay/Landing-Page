// toggle menu
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active');
  menu.classList.toggle('active');
});

function callMe()
{
    alert('Feature not supported yet, please come back later !');
}
