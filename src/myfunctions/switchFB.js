//////////
const switchFB = function (range, string1, string2) {
  range.map((x, i, arr) => {
    if (x === i + 1 + "-Fizz-Small") {
      return (arr[i] = i + 1 + "-" + string1 + "-Small");
    } else if (x === i + 1 + "-Fizz") {
      return (arr[i] = i + 1 + "-" + string1);
    } else if (x === i + 1 + "-Buzz-Small") {
      return (arr[i] = i + 1 + "-" + string2 + "-Small");
    } else if (x === i + 1 + "-Buzz") {
      return (arr[i] = i + 1 + "-" + string2);
    }
  });
};

export default switchFB;
