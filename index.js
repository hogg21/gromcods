function uniqueCount(arr) {
  if(!Array.isArray(arr)) {
    return null;
  }
  let newArr = [];
  arr.forEach(el => {
    if(!newArr.includes(el)) {
      newArr.push(el);
    }
  });
  return newArr.length;
}
console.log(uniqueCount([1, 4, 1, 8, 3, 4, 8, 8]));