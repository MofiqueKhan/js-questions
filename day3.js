function profitableGamble(prob, prize, pay) {
  return prob * prize > pay;
}
// console.log(profitableGamble(0.2, 50, 9));
// console.log(profitableGamble(0.9, 1, 2));
// console.log(profitableGamble(0.9, 3, 2));

function frames(f1, f2) {
  return f1 * f2 * 60;
}
// console.log(frames(1, 1));
// console.log(frames(10, 1));
// console.log(frames(10, 25));

function shouldServeDrinks(age, breaktime) {
  return age >= 18 && breaktime != true;
}
// console.log(shouldServeDrinks(17, true));
// console.log(shouldServeDrinks(19, false));
// console.log(shouldServeDrinks(30, true));

function isEmpty(str) {
  return str.length == 0;
}
// console.log(isEmpty(""));
// console.log(isEmpty(" "));
// console.log(isEmpty("a"));

function comp(str1, str2) {
  return str1.length == str2.length;
}
// console.log(comp("AB", "CD"));
// console.log(comp("ABD", "DE"));
// console.log(comp("hello", "moien khan"));

function divisible(a) {
  return a % 100 == 0;
}
// console.log(divisible(1));
// console.log(divisible(1000));
// console.log(divisible(100));

function divisibleByFive(a) {
  return a % 5 == 0;
}
// console.log(divisibleByFive(5));
// console.log(divisibleByFive(-55));
// console.log(divisibleByFive(37));

function length(str) {
  return;
}
// console.log(length("apple"));
// console.log(length("make"));
// console.log(length("a"));
// console.log(length(""));

// function dividesEvenly()
//  dividesEvenly(98, 7 )
//  dividesEvenly(85, 4 )

// function stringInt(str){
//   return
// }
//  console.log(stringInt("6"));
//  console.log(stringInt("1000"));
//  console.log(stringInt("12"));

// var naam = 'mofique';
// var gender = "male";

// if (gender == "male") {
//   document.write("hello mr." + naam );
// } else {
//   document.write("hello mis." + naam);
// }
