import cssBoard from '../Board/board.module.css';
import { List } from '../List/List';
import { render, dragAndDrop } from '../Task/Task';

export default function addList() {
	const main = document.querySelector(`.${cssBoard.main}`);
	const noLists = document.querySelector(`.${cssBoard['main__no-lists']}`);

	if (noLists) {
		// eslint-disable-next-line no-alert
		let nameList = prompt('Enter the name of the sheet:', 'Finished');
		if (nameList !== null) {
			main.firstChild.remove();
			main.prepend(new List(nameList).element);
		}
	} else {
		// eslint-disable-next-line no-alert
		let nameList = prompt('Enter the name of the sheet:', 'Backlog');
		if (nameList !== null) {
			main.prepend(new List(nameList).element);
		}
	}

	render();
	dragAndDrop();
}
