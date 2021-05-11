search = document.getElementById('search');

const time = 1000;
const mockArray = ['red', 'green', 'blue'];

console.log(mockArray);

function searchItem() {
  for (let key of mockArray) {
    let value = search.value;
    if (key[0] === value[0]) {
      console.log(key);
      console.log(value);
    }
  }
}

function debounce(callback) {
  let isRunning = false;

  return function () {
    if (isRunning) return;
    callback.apply(this, arguments);
    isRunning = true;
    setTimeout(() => {
      isRunning = false;
    }, time);
  };
}

search.addEventListener('input', debounce(searchItem));
