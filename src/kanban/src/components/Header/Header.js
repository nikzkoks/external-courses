import DomElement from '../DomElement/DomElement';
import css from './header.module.css';
import switchUserMenu from './menu';
import addList from './addList';

export class Header {
	constructor() {
		this.element = new DomElement({
			type: 'header',
			className: css.header,
			html: `<div class="${css.logo}">
	<div class="${css.logo__menu}"></div>
	<div class="${css.logo__title}">
		<span>Awesome Kanban Board</span>
	</div>
</div>
<div class="${css.user}">
	<button class="${css.user__button}">
		<div class="${css['add-list__img']}"></div>
		<div class="${css['add-list__title']}">Create new list</div>
	</button>
	<div class="${css['user-menu']}">
		<div class="${css['user-menu__avatar']}"></div>
		<div class="${css['user-menu__dropdown']}"></div>
	</div>
</div>
			`,
		}).element;
	}
	switchUserMenu() {
		const userMenu = document.querySelector(`.${css['user-menu']}`);
		userMenu.addEventListener('click', switchUserMenu, true);
	}
	addList() {
		const addListButton = document.querySelector(`.${css.user__button}`);
		addListButton.addEventListener('click', addList);
	}
}
