function squared(a) {
  return a * a;
}
// console.log(squared(5));
// console.log(squared(9));
// console.log(squared(100));

function and(a, b) {
  return a && b;
}
// console.log(and(true, false));
// console.log(and(true, true));
// console.log(and(false, true));
// console.log(and(false, false));

function lessThanOrEqualToZero(a) {
  return a <= 0;
}
// console.log(lessThanOrEqualToZero(5));;
// console.log(lessThanOrEqualToZero(0));
// console.log(lessThanOrEqualToZero(-2));

function lessThan100(a, b) {
  return 100 >= a + b;
}
// console.log(lessThan100(22,15));
// console.log(lessThan100(83,34));

function footballPoints(a, b, c) {
  return 3 * a + b;
}
// console.log(footballPoints(3, 4, 2));
// console.log(footballPoints(5, 0, 2));
// console.log(footballPoints(0, 0, 1));

function isSameNum(a, b) {
  return a === b;
}
//  console.log(isSameNum(4, 8));
//  console.log(isSameNum(2, 2));
//  console.log(isSameNum(2, "2"));
//  console.log(isSameNum(0, -0));

function isEven(a) {
  return a % 2 == 0;
}

// console.log(isEven(2));
// console.log(isEven(3));

function animals(a, b, c) {
  return  2*(a+ 2*(b + c));
}
// console.log(animals(2,3,5));
// console.log(animals(1,2,3));
// console.log(animals(5,2,8));

function convert(a, b) {
  return  60 * (60*a+b);
}
// console.log(convert(1, 3));
// console.log(convert(2, 0));
// console.log(convert(0, 0));

function checkEquality(a, b) {
  return a === b;
}
// console.log(checkEquality(1, true));
// console.log(checkEquality(0, "0"));
// console.log(checkEquality(1, 1));
