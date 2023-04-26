function arrayMap(array) {
  if (array instanceof Array) {
    return Promise.resolve(array.map((num) => num * 5));
  }
  return Promise.reject(new Error('array must be an instance of Array'));
}

const array = [1, 2, 3, 4, 5];
// const array = 5;
const newArray = arrayMap(array);
newArray
  .then((value) => console.log(value))
  .catch((err) => console.log(String(err)))
  .finally(() => console.log('Either ways, function was executed'));
