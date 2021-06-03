import DomElement from '../DomElement/DomElement';
import css from './footer.module.css';

export class Footer {
	constructor() {
		this.element = new DomElement({
			type: 'footer',
			className: css.footer,
			html: `
				<div class="${css['info-task']}">
					<div class="${css['info-task__active-tasks']}">
						<label for="active-task">Active tasks: </label>
						<span id="active-task"> &lt;N&gt; </span>
					</div>
					<div class="${css['info-task__finished-tasks']}">
						<label for="finished-task">Finished tasks:</label>
						<span id="finished-task"> &lt;M&gt; </span>
					</div>
				</div>
				<div class="${css['info-developer']}">
					<div class="${css['info-developer__name-year']}">
						Kanban board by <span id="${css['developer-name']}">Nikita Khobotov</span>,
						<span id="${css['developer-year']}">2021</span>
					</div>
				</div>
      `,
		}).element;
	}
}
