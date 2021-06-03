import cssApp from '../App/app.module.css';
import css from './header.module.css';

let isUserMenuOpened = false;

export default function switchUserMenu(e) {
	e.stopImmediatePropagation();
	const userMenuTemplate = `
<ul class="${css['user-menu__list']}">
  <li class="${css.list__item}">My account</li>
  <li class="${css.list__item}">My tasks</li>
  <li class="${css.list__item}">Settings</li>
  <li class="${css.list__item}">Log out</li>
</ul>
`;
	const user = document.querySelector(`.${css.user}`);
	const userMenuDropdown = document.querySelector(
		`.${css['user-menu__dropdown']}`
	);
	const app = document.querySelector(`.${cssApp.app}`);
	const newUserMenu = document.createElement('div');

	if (!isUserMenuOpened) {
		isUserMenuOpened = true;
		newUserMenu.innerHTML = userMenuTemplate;
		user.appendChild(newUserMenu);
		userMenuDropdown.style.transform = 'scale(1,-1)';
		app.addEventListener('click', switchUserMenu, true);
	} else {
		isUserMenuOpened = false;
		const userMenuList = document.querySelector(`.${css['user-menu__list']}`);
		userMenuList.remove();
		userMenuDropdown.style.transform = 'scale(1,1)';
		app.removeEventListener('click', switchUserMenu, true);
	}
}
