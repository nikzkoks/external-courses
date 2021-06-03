import DomElement from '../DomElement/DomElement';
import css from './list.module.css';
import { switchListMenu } from './menu';

export class List {
	constructor(title) {
		this.element = new DomElement({
			type: 'article',
			className: css.main__list,
			html: `
      <div class="${css['list-header']}">
						<div class="${css['list-header__title']}">${title}</div>
						<div class="${css['list-header__menu']}">...</div>
					</div>
					<div class="${css['list-content']}"></div>
					<div class="${css['list-footer']}">
						<button class="${css['list-footer__add-card']}">
							<span class="${css['add-card__img']}">+</span>
							<span class="${css['add-card__title']}">Add card</span>
						</button>
					</div>
          `,
		}).element;
	}
	switchListMenu() {
		const listMenu = document.querySelector(`.${css['list-header__menu']}`);
		listMenu.addEventListener('click', switchListMenu, true);
	}
}
