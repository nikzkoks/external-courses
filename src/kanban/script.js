const user = document.querySelector('.user');
const userMenu = document.querySelector('.user-menu');
const userMenuAvatar = document.querySelector('.user-menu__avatar');
const userMenuDropdown = document.querySelector('.user-menu__dropdown');
const app = document.querySelector('.app');
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const lists = document.querySelectorAll('.list-content');
const tasks = document.querySelectorAll('.list-content__task');
const addCard = document.querySelectorAll('.list-footer__add-card');
const body = document.querySelector('body');

const newUserMenu = document.createElement('div');

let isUserMenuOpened = false;
let isDeleteTaskOpened = false;
let draggedTask = null;

const UserMenuTemplate = `
<ul class="user-menu__list">
	<li class="list__item">My account</li>
	<li class="list__item">My tasks</li>
	<li class="list__item">Settings</li>
	<li class="list__item">Log out</li>
</ul>
`;

// disable context menu on document
document.oncontextmenu = () => {
	return false;
};

const TaskTemplate = `<input class="list-content__task" type="text" value="" />`;

function switchUserMenu() {
	if (!isUserMenuOpened) {
		newUserMenu.innerHTML = UserMenuTemplate;
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

// add Task on click button +Add card
function addTask() {
	if (this.parentNode.previousElementSibling === lists[0]) {
		const newTask = document.createElement('input');
		newTask.className = 'list-content__task';
		newTask.type = 'text';
		this.parentNode.previousElementSibling.appendChild(newTask);
		newTask.focus();

		checkTasksInLists();
		dragAndDrop();
	} else {
		const newSelectTask = document.createElement('select');
		newSelectTask.className = 'list-content__task_selector';

		const previousListContent = this.parentNode.parentNode
			.previousElementSibling.firstElementChild.nextElementSibling;

		for (let i = 0; i < previousListContent.childElementCount; i++) {
			let taskName = previousListContent.children[i].value;
			const SelectTaskTemplate = `<option value="">
			${taskName}
		</option>`;

			newSelectTask.innerHTML += SelectTaskTemplate;
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
				checkTasksInLists();
			} else {
				draggedTask = previousListContent.children[selectorTasks.selectedIndex];
				this.parentNode.append(draggedTask);

				selectorTasks.remove();
				checkTasksInLists();
			}
		});
		selectorTasks.addEventListener('keydown', function (e) {
			if (e.keyCode === 13) {
				selectorTasks.blur();
			}
		});
		dragAndDrop();
		checkTasksInLists();
	}
}

// getCounterTasks
function getCounterTasks() {
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
	getCounterTasks();
	lists.forEach(() => {
		for (let i = 1; i < lists.length; i++) {
			if (lists[i - 1].childElementCount === 0 && lists[i] !== lists[0]) {
				lists[i].nextElementSibling.firstElementChild.disabled = true;
			} else {
				lists[i].nextElementSibling.firstElementChild.disabled = false;
			}
		}
	});
}

// deleteTask - Context menu
let markedTask = null;

function deleteTask() {
	markedTask.remove();
	this.remove();
	checkTasksInLists();
}

function deleteTaskMenu() {
	if (!isDeleteTaskOpened) {
		const newDeleteTask = document.createElement('button');
		newDeleteTask.className = 'task__delete-button';
		newDeleteTask.innerText = 'Delete';
		this.parentNode.previousElementSibling.appendChild(newDeleteTask);

		isDeleteTaskOpened = true;

		markedTask = this;
		newDeleteTask.addEventListener('click', deleteTask, true);

		main.addEventListener('click', deleteTaskMenu, true);
	} else {
		main.removeEventListener('click', deleteTaskMenu, true);
		const deleteTaskButton = document.querySelector('.task__delete-button');
		deleteTaskButton.remove();
		isDeleteTaskOpened = false;
	}
	checkTasksInLists();
}
// Drag and drop tasks
function dragAndDrop() {
	const lists = document.querySelectorAll('.list-content');
	const tasks = document.querySelectorAll('.list-content__task');
	const addCard = document.querySelectorAll('.list-footer__add-card');

	tasks.forEach((task) => {
		task.addEventListener('contextmenu', deleteTaskMenu, true);
	});

	addCard.forEach((addCardButton) => {
		addCardButton.addEventListener('click', addTask, true);
	});

	tasks.forEach((task) => {
		task.addEventListener('blur', function () {
			if (task.value === '') {
				task.remove();
				checkTasksInLists();
			} else {
				task.setAttribute('readonly', '');
				checkTasksInLists();
			}
		});
		task.addEventListener('keydown', function (e) {
			if (e.keyCode === 13) {
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
				this.style.display = 'block';
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
			checkTasksInLists();
		});
	});

	getCounterTasks();
}

dragAndDrop();
