const app = document.querySelector('.app');
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const lists = document.querySelectorAll('.list-content');
const tasks = document.querySelectorAll('.list-content__task');
const addCard = document.querySelectorAll('.list-footer__add-card');
const body = document.querySelector('body');

const newUserMenu = document.createElement('div');

const KEY_ENTER = 13;

let isDeleteTaskOpened = false;
let draggedTask = null;
let markedTask = null;

// disable context menu on document
document.oncontextmenu = () => {
	return false;
};

// render
function render() {
	getCounterTasks();
	checkTasksInLists();
}

// add Task on click button +Add card
function addTask() {
	const lists = document.querySelectorAll('.list-content');
	const tasks = document.querySelectorAll('.list-content__task');

	if (this.parentNode.previousElementSibling === lists[0]) {
		const templateAddTask = `<div class="task__delete-button"></div>
            <p class="task__text"></p>`;
		const newTask = document.createElement('input');
		newTask.className = 'list-content__task';
		newTask.innerHTML = templateAddTask;
		this.parentNode.previousElementSibling.appendChild(newTask);

		newTask.focus();
		dragAndDrop();
		render();
	} else {
		const newSelectTask = document.createElement('select');
		newSelectTask.className = 'list-content__task_selector';

		const previousListContent =
			this.parentNode.parentNode.previousElementSibling.firstElementChild
				.nextElementSibling;

		for (let i = 0; i < previousListContent.childElementCount; i++) {
			let taskName =
				previousListContent.children[i].firstElementChild.nextElementSibling
					.innerText;
			console.log(taskName);
			const selectTaskTemplate = `<option value="${taskName}">
      ${taskName}
    </option>`;

			newSelectTask.innerHTML += selectTaskTemplate;
			newSelectTask.selectedIndex = newSelectTask.childElementCount;
		}

		this.parentNode.previousElementSibling.appendChild(newSelectTask);
		newSelectTask.focus();

		const selectorTasks = document.querySelector(
			'.list-content__task_selector'
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
			if (e.keyCode === keyEnter) {
				selectorTasks.blur();
			}
		});
		render();
	}
}

// deleteTask - Context menu
function deleteTask() {
	this.parentNode.remove();
	this.remove();
	render();
	localStorage.setItem('main', JSON.stringify(main.innerHTML));
}

// getCounterTasks
function getCounterTasks() {
	const lists = document.querySelectorAll('.list-content');
	const activeTasks = document.querySelector('#active-task');
	const finishedTasks = document.querySelector('#finished-task');

	let counterActive = 0;
	let counterFinished = 0;
	let counterLists = lists.length;

	for (let i = 0; i < counterLists - 1; i++) {
		counterActive += lists[i].childElementCount;
	}
	counterFinished += lists[counterLists - 1].childElementCount;

	activeTasks.innerHTML = counterActive;
	finishedTasks.innerHTML = counterFinished;
}

// Disabled AddCard
function checkTasksInLists() {
	const lists = document.querySelectorAll('.list-content');
	const deleteTaskButton = document.querySelectorAll('.task__delete-button');

	if (deleteTaskButton !== null) {
		deleteTaskButton.forEach((button) => {
			button.addEventListener('click', deleteTask, true);
		});
	}

	lists.forEach(() => {
		for (let i = 1; i < lists.length; i++) {
			if (lists[i - 1].childElementCount === 0 && lists[i] !== lists[0]) {
				lists[i].nextElementSibling.firstElementChild.disabled = true;
			} else {
				lists[i].nextElementSibling.firstElementChild.disabled = false;
			}
		}
	});
	localStorage.setItem('main', JSON.stringify(main.innerHTML));
}

// Drag and drop tasks
function dragAndDrop() {
	const lists = document.querySelectorAll('.list-content');
	const tasks = document.querySelectorAll('.list-content__task');
	const addCard = document.querySelectorAll('.list-footer__add-card');

	addCard.forEach((addCardButton) => {
		addCardButton.addEventListener('click', addTask, true);
	});

	tasks.forEach((task) => {
		task.addEventListener('blur', function () {
			if (task.value === '') {
				task.remove();
				render();
			} else {
				const templateAddTask = `<div class="task__delete-button"></div>
            <p class="task__text">${task.value}</p>`;
				const newTask = document.createElement('div');
				newTask.className = 'list-content__task';
				newTask.setAttribute('draggable', 'true');
				newTask.innerHTML = templateAddTask;
				task.parentNode.appendChild(newTask);
				task.remove();

				render();
			}
		});
		task.addEventListener('keydown', function (e) {
			if (e.keyCode === keyEnter) {
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
			localStorage.setItem('main', JSON.stringify(main.innerHTML));
		});
	});

	render();
}

if (localStorage.getItem('main')) {
	main.innerHTML = JSON.parse(localStorage.getItem('main'));
	render();
}

render();
dragAndDrop();
