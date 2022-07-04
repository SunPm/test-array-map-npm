const arrayMap = (array, callback) => {
  let i = -1;
  const len = array.length;
  let resArray = [];
  while (++i < len) {
    resArray.push(callback(array[i], i, array));
  }
  return resArray;
}
