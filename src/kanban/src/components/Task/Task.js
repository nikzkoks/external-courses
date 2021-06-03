import DomElement from '../DomElement/DomElement';
import css from './task.module.css';
import cssList from '../List/list.module.css';
import cssBoard from '../Board/board.module.css';
import { getCounterTasks } from '../Board/Board';
import { switchListMenu } from '../List/menu';

const KEY_ENTER = 13;

let draggedTask = null;

const templateNoLists = `<p class="${cssBoard['main__no-lists']}">The list of task sheets is empty. Add a sheet by clicking the "Create new list" button in the header of the board!</p>`;

export class Task {
	constructor(name) {
		this.element = new DomElement({
			type: 'div',
			className: css['list-content__task'],
			html: `
							<div class="${css['task__delete-button']}"></div>
							<p class="${css.task__text}">${name}</p>
          `,
		}).element;
	}
}

// render
export function render() {
	checkTasksInLists();
	getCounterTasks();
}

// deleteTask - Context menu
export function deleteTask() {
	const main = document.querySelector(`.${cssBoard.main}`);
	this.parentNode.remove();
	this.remove();
	render();
	localStorage.setItem('main', JSON.stringify(main.innerHTML));
}

// Disabled AddCard
export function checkTasksInLists() {
	const main = document.querySelector(`.${cssBoard.main}`);
	const lists = document.querySelectorAll(`.${cssList['list-content']}`);
	const deleteTaskButton = document.querySelectorAll(
		`.${css['task__delete-button']}`
	);
	if (deleteTaskButton !== null) {
		deleteTaskButton.forEach((button) => {
			button.addEventListener('click', deleteTask, true);
		});
	}

	const listsDelete = document.querySelectorAll(
		`.${cssList['list-header__menu']}`
	);
	listsDelete.forEach((button) => {
		button.addEventListener('click', switchListMenu);
	});

	if (lists.length !== 0) {
		lists.forEach(() => {
			for (let i = 1; i < lists.length; i++) {
				if (lists[i - 1].childElementCount === 0 && lists[i] !== lists[0]) {
					lists[i].nextElementSibling.firstElementChild.disabled = true;
				} else {
					lists[i].nextElementSibling.firstElementChild.disabled = false;
				}
			}
			lists[0].nextElementSibling.firstElementChild.disabled = false;
		});
	} else {
		main.innerHTML = templateNoLists;
		getCounterTasks();
	}
	localStorage.setItem('main', JSON.stringify(main.innerHTML));
}
// add Task on click button +Add card
function addTask() {
	const lists = document.querySelectorAll(`.${cssList['list-content']}`);

	if (this.parentNode.previousElementSibling === lists[0]) {
		const templateAddTask = `<div class="${css['task__delete-button']}"></div>
							<p class="${css.task__text}"></p>`;
		const newTask = document.createElement('input');
		newTask.className = css['list-content__task'];
		newTask.innerHTML = templateAddTask;
		this.parentNode.previousElementSibling.appendChild(newTask);
		newTask.focus();
		dragAndDrop();
		render();
	} else {
		const newSelectTask = document.createElement('select');
		newSelectTask.className = css['list-content__task_selector'];

		const previousListContent =
			this.parentNode.parentNode.previousElementSibling.firstElementChild
				.nextElementSibling;

		for (let i = 0; i < previousListContent.childElementCount; i++) {
			let taskName =
				previousListContent.children[i].firstElementChild.nextElementSibling
					.innerText;
			const selectTaskTemplate = `<option value="${taskName}">
      ${taskName}
    </option>`;

			newSelectTask.innerHTML += selectTaskTemplate;
			newSelectTask.selectedIndex = newSelectTask.childElementCount;
		}

		this.parentNode.previousElementSibling.appendChild(newSelectTask);
		newSelectTask.focus();

		const selectorTasks = document.querySelector(
			`.${css['list-content__task_selector']}`
		);

		selectorTasks.addEventListener('blur', function () {
			if (selectorTasks.selectedIndex === -1) {
				selectorTasks.remove();
				render();
			} else {
				draggedTask = previousListContent.children[selectorTasks.selectedIndex];
				this.parentNode.append(draggedTask);
				selectorTasks.remove();
				render();
			}
		});
		selectorTasks.addEventListener('keydown', function (e) {
			if (e.keyCode === KEY_ENTER) {
				selectorTasks.blur();
			}
		});
		render();
	}
}

// Drag and drop tasks
export function dragAndDrop() {
	const main = document.querySelector(`.${cssBoard.main}`);
	const lists = document.querySelectorAll(`.${cssList['list-content']}`);
	const tasks = document.querySelectorAll(`.${css['list-content__task']}`);
	const addCard = document.querySelectorAll(
		`.${cssList['list-footer__add-card']}`
	);

	addCard.forEach((addCardButton) => {
		addCardButton.addEventListener('click', addTask, true);
	});

	tasks.forEach((task) => {
		task.addEventListener('blur', function () {
			if (task.value === '') {
				task.remove();
				render();
			} else {
				const templateAddTask = `<div class="${css['task__delete-button']}"></div>
            <p class="${css.task__text}">${task.value}</p>`;
				const newTask = document.createElement('div');
				newTask.className = css['list-content__task'];
				newTask.setAttribute('draggable', 'true');
				newTask.innerHTML = templateAddTask;
				task.parentNode.appendChild(newTask);
				task.remove();

				render();
			}
		});
		task.addEventListener('keydown', function (e) {
			if (e.keyCode === KEY_ENTER) {
				task.blur();
			}
		});
	});

	tasks.forEach((task) => {
		task.setAttribute('draggable', 'true');
	});

	tasks.forEach((task) => {
		task.addEventListener('dragstart', function () {
			draggedTask = task;
			setTimeout(() => {
				this.style.display = 'none';
			}, 0);
		});
		task.addEventListener('dragend', function () {
			draggedTask = task;
			setTimeout(() => {
				this.style.display = 'flex';
				draggedTask = null;
			}, 0);
		});
	});

	lists.forEach((list) => {
		list.addEventListener('dragover', function (e) {
			e.preventDefault();
		});

		list.addEventListener('dragenter', function (e) {
			e.preventDefault();
		});

		list.addEventListener('dragleave', function (e) {
			e.preventDefault();
		});

		list.addEventListener('drop', function (e) {
			this.append(draggedTask);
			draggedTask.style.display = 'flex';
			render();
		});
	});

	render();
}
