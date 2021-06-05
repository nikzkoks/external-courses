import cssApp from '../App/app.module.css';
import css from './list.module.css';
import cssBoard from '../Board/board.module.css';
import { render } from '../Task/Task';

export let isListMenuOpened = false;

function deleteList(e) {
	e.stopPropagation();
	const app = document.querySelector(`.${cssApp.app}`);
	app.removeEventListener('click', switchListMenu);
	const main = document.querySelector(`.${cssBoard.main}`);
	this.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
	isListMenuOpened = false;
	render();
}

export function switchListMenu(e, context = this) {
	e.stopPropagation();

	const userMenuTemplate = `
<ul class="${css['list-header__menu_dropdown']}">
  <li class="${css.menu__dropdown_item}">Delete</li>
</ul>
`;
	const app = document.querySelector(`.${cssApp.app}`);
	const newListMenu = document.createElement('div');

	if (!isListMenuOpened) {
		isListMenuOpened = true;
		newListMenu.innerHTML = userMenuTemplate;
		context.appendChild(newListMenu);
		const listDeleteButton = document.querySelector(
			`.${css.menu__dropdown_item}`
		);
		listDeleteButton.addEventListener('click', deleteList);
		app.addEventListener('click', switchListMenu);
	} else {
		isListMenuOpened = false;
		const listMenu = document.querySelector(
			`.${css['list-header__menu_dropdown']}`
		);
		listMenu.remove();
		app.removeEventListener('click', switchListMenu);
	}
	render();
}
