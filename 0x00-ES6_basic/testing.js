const array = [1, 2, 3, 4, 5, 6, 7];
// console.log(array instanceof Array)
function mapArray(array) {
  return new Promise((resolve, reject) => {
    if (array instanceof Array) {
        resolve((array) => console.log(array.map((num) => num * 5)));
    }
    return reject(new Error('array must be an Array'));
  });
}

const p1 = mapArray(array);
p1.then((value) => console.log(value));
