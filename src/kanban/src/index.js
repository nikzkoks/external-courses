import {} from './main.css';
import cssBoard from './components/Board/board.module.css';
import { App } from './components/App/App';
import { Header } from './components/Header/Header';
import { Board, getCounterTasks } from './components/Board/Board';
import { List } from './components/List/List';
import { Task, render, dragAndDrop } from './components/Task/Task';
import { Footer } from './components/Footer/Footer';

document.oncontextmenu = () => {
	return false;
};

const app = new App();

const header = new Header();

const board = new Board();

const list1 = new List('Backlog');
const list2 = new List('Ready');
const list3 = new List('In Progress');
const list4 = new List('Finished');

const task1 = new Task('First Task');
const task2 = new Task('Second Task');
const task3 = new Task('Third Task');

const footer = new Footer();

document.body.appendChild(app.element);
const kanban = document.body.children[1];

kanban.appendChild(header.element);
kanban.appendChild(board.element);
kanban.appendChild(footer.element);

const kanbanMain = kanban.childNodes[1];

kanbanMain.appendChild(list1.element).childNodes[3].appendChild(task1.element);
kanbanMain.appendChild(list2.element).childNodes[3].appendChild(task2.element);
kanbanMain.appendChild(list3.element);
kanbanMain.appendChild(list4.element).childNodes[3].appendChild(task3.element);

header.switchUserMenu();
header.addList();

const main = document.querySelector(`.${cssBoard.main}`);

if (localStorage.getItem('main')) {
	main.innerHTML = JSON.parse(localStorage.getItem('main'));
	render();
}

render();
dragAndDrop();
