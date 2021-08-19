//////////
const myRange = function (from, to) {
  let array = [];
  for (let index = from; index < to + 1; index++) {
    array.push(index);
  }
  return array;
};

export default myRange;
