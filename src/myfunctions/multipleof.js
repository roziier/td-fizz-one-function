//////////
const multipleOf = function (range, num, string) {
  range.map((x, i, arr) => {
    if (x % num === 0) {
      return (arr[i] = x + "-" + string);
    }
  });
};

export default multipleOf;
