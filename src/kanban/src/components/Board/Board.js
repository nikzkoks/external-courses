import DomElement from '../DomElement/DomElement';
import css from './board.module.css';
import cssList from '../List/list.module.css';

export class Board {
	constructor() {
		this.element = new DomElement({
			type: 'section',
			className: css.main,
		}).element;
	}
}
// getCounterTasks
export function getCounterTasks() {
	const lists = document.querySelectorAll(`.${cssList['list-content']}`);
	const activeTasks = document.querySelector('#active-task');
	const finishedTasks = document.querySelector('#finished-task');
	if (lists.length !== 0) {
		let counterActive = 0;
		let counterFinished = 0;
		let counterLists = lists.length;
		for (let i = 0; i < counterLists - 1; i++) {
			counterActive += lists[i].childElementCount;
		}
		counterFinished += lists[counterLists - 1].childElementCount;

		activeTasks.innerHTML = counterActive;
		finishedTasks.innerHTML = counterFinished;
	} else {
		activeTasks.innerHTML = 0;
		finishedTasks.innerHTML = 0;
	}
}
