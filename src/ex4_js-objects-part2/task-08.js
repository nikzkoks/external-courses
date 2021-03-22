function lowerCamelCase(string) {
  return string
    .trim()
    .toLowerCase()
    .split(' ')
    .filter((el) => el !== '')
    .map((el, item) =>
      item !== 0
        ? el[0].toUpperCase() + el.slice(1)
        : el[0].toLowerCase() + el.slice(1)
    )
    .join('');
}
module.exports = lowerCamelCase;
