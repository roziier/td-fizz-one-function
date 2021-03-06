const fizzBuzz = require("../index");

// STEP 1
// test("step 1", () => {
//   const array = [
//     1,
//     2,
//     "3-Fizz",
//     4,
//     "5-Buzz",
//     "6-Fizz",
//     7,
//     8,
//     "9-Fizz",
//     "10-Buzz",
//     11,
//     "12-Fizz",
//     13,
//     14,
//     "15-Fizzbuzz",
//     16,
//     17,
//     "18-Fizz",
//     19,
//     "20-Buzz",
//     "21-Fizz",
//     22,
//     23,
//     "24-Fizz",
//     "25-Buzz",
//     26,
//     "27-Fizz",
//     28,
//     29,
//     "30-Fizzbuzz",
//     31,
//     32,
//     "33-Fizz",
//     34,
//     "35-Buzz",
//     "36-Fizz",
//     37,
//     38,
//     "39-Fizz",
//     "40-Buzz",
//     41,
//     "42-Fizz",
//     43,
//     44,
//     "45-Fizzbuzz",
//     46,
//     47,
//     "48-Fizz",
//     49,
//     "50-Buzz",
//     "51-Fizz",
//     52,
//     53,
//     "54-Fizz",
//     "55-Buzz",
//     56,
//     "57-Fizz",
//     58,
//     59,
//     "60-Fizzbuzz",
//     61,
//     62,
//     "63-Fizz",
//     64,
//     "65-Buzz",
//     "66-Fizz",
//     67,
//     68,
//     "69-Fizz",
//     "70-Buzz",
//     71,
//     "72-Fizz",
//     73,
//     74,
//     "75-Fizzbuzz",
//     76,
//     77,
//     "78-Fizz",
//     79,
//     "80-Buzz",
//     "81-Fizz",
//     82,
//     83,
//     "84-Fizz",
//     "85-Buzz",
//     86,
//     "87-Fizz",
//     88,
//     89,
//     "90-Fizzbuzz",
//     91,
//     92,
//     "93-Fizz",
//     94,
//     "95-Buzz",
//     "96-Fizz",
//     97,
//     98,
//     "99-Fizz",
//     "100-Buzz",
//   ];
//   expect(fizzBuzz(1, 100)).toEqual(array);
// });

// STEP 2
// test("step 2", () => {
//   const array = [
//     "21-Fizz",
//     22,
//     23,
//     "24-Fizz",
//     "25-Buzz",
//     26,
//     "27-Fizz",
//     28,
//     29,
//     "30-Fizzbuzz",
//     31,
//     32,
//     "33-Fizz",
//     34,
//     "35-Buzz",
//     "36-Fizz",
//     37,
//     38,
//     "39-Fizz",
//     "40-Buzz",
//     41,
//     "42-Fizz",
//     43,
//     44,
//     "45-Fizzbuzz",
//     46,
//     47,
//     "48-Fizz",
//     49,
//     "50-Buzz",
//   ];
//   expect(fizzBuzz(21, 50)).toEqual(array);
// });

// STEP 3
// test("step 3", () => {
//   const array = [
//     1,
//     2,
//     "3-Fizz",
//     4,
//     "5-Buzz",
//     "6-Fizz",
//     "7-Foo",
//     8,
//     "9-Fizz",
//     "10-Buzz",
//     "11-Boo",
//     "12-Fizz",
//     13,
//     "14-Foo",
//     "15-Fizzbuzz",
//     16,
//     17,
//     "18-Fizz",
//     19,
//     "20-Buzz",
//     "21-Fizz",
//     "22-Boo",
//     23,
//     "24-Fizz",
//     "25-Buzz",
//     26,
//     "27-Fizz",
//     "28-Foo",
//     29,
//     "30-Fizzbuzz",
//     31,
//     32,
//     "33-Fizz",
//     34,
//     "35-Buzz",
//     "36-Fizz",
//     37,
//     38,
//     "39-Fizz",
//     "40-Buzz",
//     41,
//     "42-Fizz",
//     43,
//     "44-Boo",
//     "45-Fizzbuzz",
//     46,
//     47,
//     "48-Fizz",
//     "49-Foo",
//     "50-Buzz",
//     "51-Fizz",
//     52,
//     53,
//     "54-Fizz",
//     "55-Buzz",
//     "56-Foo",
//     "57-Fizz",
//     58,
//     59,
//     "60-Fizzbuzz",
//     61,
//     62,
//     "63-Fizz",
//     64,
//     "65-Buzz",
//     "66-Fizz",
//     67,
//     68,
//     "69-Fizz",
//     "70-Buzz",
//     71,
//     "72-Fizz",
//     73,
//     74,
//     "75-Fizzbuzz",
//     76,
//     "77-FooBoo",
//     "78-Fizz",
//     79,
//     "80-Buzz",
//     "81-Fizz",
//     82,
//     83,
//     "84-Fizz",
//     "85-Buzz",
//     86,
//     "87-Fizz",
//     "88-Boo",
//     89,
//     "90-Fizzbuzz",
//     "91-Foo",
//     92,
//     "93-Fizz",
//     94,
//     "95-Buzz",
//     "96-Fizz",
//     97,
//     "98-Foo",
//     "99-Fizz",
//     "100-Buzz",
//   ];
//   expect(fizzBuzz(1, 100)).toEqual(array);
// });

// STEP 4
// test("step 4", () => {
//   const array = [
//     "1-Small",
//     "2-Small",
//     "3-Fizz-Small",
//     "4-Small",
//     "5-Buzz-Small",
//     "6-Fizz-Small",
//     "7-Foo-Small",
//     "8-Small",
//     "9-Fizz-Small",
//     "10-Buzz-Small",
//     "11-Boo-Small",
//     "12-Fizz-Small",
//     "13-Small",
//     "14-Foo-Small",
//     "15-Fizzbuzz-Small",
//     16,
//     17,
//     "18-Fizz",
//     19,
//     "20-Buzz",
//     "21-Fizz",
//     "22-Boo",
//     23,
//     "24-Fizz",
//     "25-Buzz",
//     26,
//     "27-Fizz",
//     "28-Foo",
//     29,
//     "30-Fizzbuzz",
//     31,
//     32,
//     "33-Fizz",
//     34,
//     "35-Buzz",
//     "36-Fizz",
//     37,
//     38,
//     "39-Fizz",
//     "40-Buzz",
//     41,
//     "42-Fizz",
//     43,
//     "44-Boo",
//     "45-Fizzbuzz",
//     46,
//     47,
//     "48-Fizz",
//     "49-Foo",
//     "50-Buzz",
//     "51-Fizz",
//     52,
//     53,
//     "54-Fizz",
//     "55-Buzz",
//     "56-Foo",
//     "57-Fizz",
//     58,
//     59,
//     "60-Fizzbuzz",
//     61,
//     62,
//     "63-Fizz",
//     64,
//     "65-Buzz",
//     "66-Fizz",
//     67,
//     68,
//     "69-Fizz",
//     "70-Buzz",
//     71,
//     "72-Fizz",
//     73,
//     74,
//     "75-Fizzbuzz",
//     76,
//     "77-FooBoo",
//     "78-Fizz",
//     79,
//     "80-Buzz",
//     "81-Fizz",
//     82,
//     83,
//     "84-Fizz",
//     "85-Buzz",
//     86,
//     "87-Fizz",
//     "88-Boo",
//     89,
//     "90-Fizzbuzz",
//     "91-Foo",
//     92,
//     "93-Fizz",
//     94,
//     "95-Buzz",
//     "96-Fizz-Big",
//     "97-Big",
//     "98-Foo-Big",
//     "99-Fizz-Big",
//     "100-Buzz-Big",
//   ];
//   expect(fizzBuzz(1, 100)).toEqual(array);
// });

// STEP 5
// test("step 5", () => {
//   const array = [
//     "1-Small",
//     "2-Small",
//     "3-Buzz-Small",
//     "4-Small",
//     "5-Fizz-Small",
//     "6-Buzz-Small",
//     "7-Foo-Small",
//     "8-Small",
//     "9-Buzz-Small",
//     "10-Fizz-Small",
//     "11-Boo-Small",
//     "12-Buzz-Small",
//     "13-Small",
//     "14-Foo-Small",
//     "15-Fizzbuzz-Small",
//     16,
//     17,
//     "18-Buzz",
//     19,
//     "20-Fizz",
//     "21-Buzz",
//     "22-Boo",
//     23,
//     "24-Buzz",
//     "25-Fizz",
//     26,
//     "27-Buzz",
//     "28-Foo",
//     29,
//     "30-Fizzbuzz",
//     31,
//     32,
//     "33-Buzz",
//     34,
//     "35-Fizz",
//     "36-Buzz",
//     37,
//     38,
//     "39-Buzz",
//     "40-Fizz",
//     41,
//     "42-Buzz",
//     43,
//     "44-Boo",
//     "45-Fizzbuzz",
//     46,
//     47,
//     "48-Buzz",
//     "49-Foo",
//     "50-Fizz",
//     "51-Buzz",
//     52,
//     53,
//     "54-Buzz",
//     "55-Fizz",
//     "56-Foo",
//     "57-Buzz",
//     58,
//     59,
//     "60-Fizzbuzz",
//     61,
//     62,
//     "63-Buzz",
//     64,
//     "65-Fizz",
//     "66-Buzz",
//     67,
//     68,
//     "69-Buzz",
//     "70-Fizz",
//     71,
//     "72-Buzz",
//     73,
//     74,
//     "75-Fizzbuzz",
//     76,
//     "77-FooBoo",
//     "78-Buzz",
//     79,
//     "80-Fizz",
//     "81-Buzz",
//     82,
//     83,
//     "84-Buzz",
//     "85-Fizz",
//     86,
//     "87-Buzz",
//     "88-Boo",
//     89,
//     "90-Fizzbuzz",
//     "91-Foo",
//     92,
//     "93-Buzz",
//     94,
//     "95-Fizz",
//     "96-Fizz-Big",
//     "97-Big",
//     "98-Foo-Big",
//     "99-Fizz-Big",
//     "100-Buzz-Big",
//   ];
//   expect(fizzBuzz(1, 100)).toEqual(array);
// });

// STEP 6
// test("step 6", () => {
//   const array = [
//     "1-Small",
//     "2-Small",
//     "3-GG-Small",
//     "4-Small",
//     "5-GG-Small",
//     "6-GG-Small",
//     "7-Foo-Small",
//     "8-Small",
//     "9-GG-Small",
//     "10-GG-Small",
//     "11-Boo-Small",
//     "12-GG-Small",
//     "13-Small",
//     "14-Foo-Small",
//     "15-Fizzbuzz-Small",
//     16,
//     17,
//     "18-GG",
//     19,
//     "20-GG",
//     "21-GG",
//     "22-Boo",
//     23,
//     "24-GG",
//     "25-GG",
//     26,
//     "27-GG",
//     "28-Foo",
//     29,
//     "30-FTW",
//     31,
//     32,
//     "33-GG",
//     34,
//     "35-GG",
//     "36-GG",
//     37,
//     38,
//     "39-GG",
//     "40-GG",
//     41,
//     "42-GG",
//     43,
//     "44-Boo",
//     "45-FTW",
//     46,
//     47,
//     "48-GG",
//     "49-Foo",
//     "50-GG",
//     "51-GG",
//     52,
//     53,
//     "54-GG",
//     "55-GG",
//     "56-Foo",
//     "57-GG",
//     58,
//     59,
//     "60-FTW",
//     61,
//     62,
//     "63-GG",
//     64,
//     "65-GG",
//     "66-GG",
//     67,
//     68,
//     "69-GG",
//     "70-GG",
//     71,
//     "72-GG",
//     73,
//     74,
//     "75-FTW",
//     76,
//     "77-FooBoo",
//     "78-GG",
//     79,
//     "80-GG",
//     "81-GG",
//     82,
//     83,
//     "84-GG",
//     "85-GG",
//     86,
//     "87-GG",
//     "88-Boo",
//     89,
//     "90-FTW",
//     "91-Foo",
//     92,
//     "93-GG",
//     94,
//     "95-GG",
//     "96-Fizz-Big",
//     "97-Big",
//     "98-Foo-Big",
//     "99-Fizz-Big",
//     "100-Buzz-Big",
//   ];
//   expect(fizzBuzz(1, 100)).toEqual(array);
// });
