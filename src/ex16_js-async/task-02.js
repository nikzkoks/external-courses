const search = document.getElementById('search');
const text = document.getElementById('text');

const time = 200;
const mockArray = [
	'123',
	'234',
	'312',
	'red',
	'rad',
	'black',
	'blur',
	'green',
	'glass',
];

console.log(mockArray);

function searchItem(...rest) {
	let searchValue = search.value;
	mockArray.forEach((item) => {
		if (item.includes(searchValue) && item[0] === searchValue[0]) {
			text.value = item;
		}
	});
	if (!searchValue) {
		text.value = null;
	}
	console.log(rest);
}

function debounce(callback) {
	let isRunning = false;

	return function () {
		if (isRunning) return;
		callback.apply(this, ...rest);
		isRunning = true;
		setTimeout(() => {
			isRunning = false;
		}, time);
	};
}

search.addEventListener('input', debounce(searchItem(1, 2, 3)));
