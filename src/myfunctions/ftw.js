/////////
const ftw = function (range, string) {
  range.map((x, i, arr) => {
    if (x === i + 1 + "-Fizzbuzz") {
      return (arr[i] = i + 1 + "-" + string);
    }
  });
};
export default ftw;
