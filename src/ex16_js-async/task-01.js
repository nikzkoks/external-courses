// const requestURL = 'https://jsonplaceholder.typicode.com/users/';

function someFetch(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = 'json';
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => {
      if (xhr.status === 200 || xhr.status === 201) {
        resolve(xhr.response);
      }
      reject(xhr.response);
    };
    xhr.onerror = () => {
      reject(xhr.response);
    };
    if (body === null) {
      xhr.send();
    } else {
      xhr.send(JSON.stringify(body));
    }
  });
}
// someFetch('POST', requestURL, { name: 'Nikita' })
// 	.then((response) => {
// 		console.log('Успешно:' + JSON.stringify(response));
// 	})
// 	.catch((error) => {
// 		console.error('Ошибка:' + JSON.stringify(error));
// 	});
module.exports = someFetch;
