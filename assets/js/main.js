const menuList = document.querySelector('.list_menu');
const iconBars = document.querySelector('.fa-bars');

if (iconBars) iconBars.addEventListener('click', handleToggleMenu);
function handleToggleMenu() {
  if (menuList) menuList.classList.toggle('active');
  if (!menuList.className.includes('active')) {
    subMenuList.classList.remove('active');
  }
}

const aElement = document.querySelector('.headerTop .list_menu .list_item:nth-child(2)>.list_link');
const subMenuList = document.querySelector('.sub_menu');
if (aElement) aElement.addEventListener('click', handleToggleSubMenu);
function handleToggleSubMenu(e) {
  e.preventDefault();
  if (subMenuList) subMenuList.classList.toggle('active');
}
