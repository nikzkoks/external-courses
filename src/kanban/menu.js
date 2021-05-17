const user = document.querySelector('.user');
const userMenu = document.querySelector('.user-menu');
const userMenuAvatar = document.querySelector('.user-menu__avatar');
const userMenuDropdown = document.querySelector('.user-menu__dropdown');

let isUserMenuOpened = false;

const userMenuTemplate = `
<ul class="user-menu__list">
  <li class="list__item">My account</li>
  <li class="list__item">My tasks</li>
  <li class="list__item">Settings</li>
  <li class="list__item">Log out</li>
</ul>
`;

function switchUserMenu() {
	if (!isUserMenuOpened) {
		newUserMenu.innerHTML = userMenuTemplate;
		user.appendChild(newUserMenu);
		userMenuDropdown.style.transform = 'scale(1,-1)';
		isUserMenuOpened = true;
		main.addEventListener('click', switchUserMenu, true);
	} else {
		const userMenuList = document.querySelector('.user-menu__list');
		userMenuList.remove();
		userMenuDropdown.style.transform = 'scale(1,1)';
		isUserMenuOpened = false;
		main.removeEventListener('click', switchUserMenu, true);
	}
}
userMenu.addEventListener('click', switchUserMenu, true);
