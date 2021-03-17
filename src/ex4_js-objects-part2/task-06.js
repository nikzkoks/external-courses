function upperFirstCharEveryWord(string) {
  return string
    .split(` `)
    .map((el) => el[0].toUpperCase() + el.slice(1))
    .join(` `);
}
module.exports = upperFirstCharEveryWord;
