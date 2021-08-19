/////////
const ororor = function (range, string) {
  range.map((x, i, arr) => {
    if (x === i + 1 + "-Buzz") {
      return (arr[i] = i + 1 + "-" + string);
    } else if (x === i + 1 + "-Buzz-Small") {
      return (arr[i] = i + 1 + "-" + string + "-Small");
    } else if (x === i + 1 + "-Fizz") {
      return (arr[i] = i + 1 + "-" + string);
    } else if (x === i + 1 + "-Fizz-Small") {
      return (arr[i] = i + 1 + "-" + string + "-Small");
    }
  });
};

export default ororor;
