// import "./style.scss";
import myRange from "./myfunctions/myrange";
import multipleOf from "./myfunctions/multipleof";
import doubleMultipleOf from "./myfunctions/doubleMultipleOf";
import smallBig from "./myfunctions/smallBig";
import switchFB from "./myfunctions/switchFB";
import ftw from "./myfunctions/ftw";
import ororor from "./myfunctions/ororor";

const fizzBuzz = (val1, val2) => {
  let numFromTo = myRange(val1, val2);
  //   multipleOf 7 & 11
  doubleMultipleOf(numFromTo, 7, 11, "FooBoo");
  //   multipleOf 3 & 5
  doubleMultipleOf(numFromTo, 3, 5, "Fizzbuzz");
  //   multipleOf 3
  multipleOf(numFromTo, 3, "Fizz");
  //   multipleOf 5
  multipleOf(numFromTo, 5, "Buzz");
  //   multipleOf 7
  multipleOf(numFromTo, 7, "Foo");
  //   multipleOf 11
  multipleOf(numFromTo, 11, "Boo");
  //   add small and big
  smallBig(numFromTo, 16, 95, "Small", "Big");
  //   switch multiple of 3 with multiple of 5
  switchFB(numFromTo, "Buzz", "Fizz");
  //   switch multiple of 3 and multiple of 5
  ftw(numFromTo, "FTW");
  //   switch multiple of 3 or multiple of 5
  ororor(numFromTo, "GG");
  return numFromTo;
};

console.log(fizzBuzz(1, 100));
module.exports = fizzBuzz;
