function stringIsLength(string, number) {
  if (string.length > number) {
    return `${string.slice(0, number - 1)}…`;
  }
  return false;
}
module.exports = stringIsLength;
