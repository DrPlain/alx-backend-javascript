export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || (typeof startString !== 'string')) {
    return '';
  }
  const string = [];
  set.forEach((item) => {
    if (item.startsWith(startString) && typeof item === 'string') {
      const remainingString = item.slice(3);
      string.push(remainingString);
    }
  });
  return string.join('-');
}
