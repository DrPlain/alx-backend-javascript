export default function cleanSet(set, startString) {
  const string = [];
  if (startString === '') {
    return '';
  }
  set.forEach((item) => {
    if (item.startsWith(startString)) {
      const remainingString = item.slice(startString.length);
      string.push(remainingString);
    }
  });

  return string.join('-');
}
