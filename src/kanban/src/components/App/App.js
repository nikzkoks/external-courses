import DomElement from '../DomElement/DomElement';
import css from './app.module.css';

export class App {
	constructor() {
		this.element = new DomElement({
			type: 'div',
			className: css.app,
		}).element;
	}
}
