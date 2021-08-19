//////////
const smallBig = function (range, num1, num2, string1, string2) {
  range.map((x, i, arr) => {
    i + 1 < num1 ? (arr[i] = x + "-" + string1) : x;
    i + 1 > num2 ? (arr[i] = x + "-" + string2) : x;
  });
};

export default smallBig;
