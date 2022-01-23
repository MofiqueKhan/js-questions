function acceptIntoMovie(age, issupervised) {
  return age >= 15 || issupervised == true;
}
// console.log(acceptIntoMovie(14, true));
// console.log(acceptIntoMovie(14, false));
// console.log(acceptIntoMovie(16, false));

function eq(str) {
  return eval(str);
}
// console.log(eq("1+2"));
// console.log(eq("6/(9-7)"));    
// console.log(eq("3+2-4"));

function concatName(str1, str2) {
  return str2.concat(",", str1);
}
//  console.log(concatName("First", "Last"));
//  console.log(concatName("John", "Doe"));
//  console.log(concatName("Mary", "Jane"));

function posCom(a) {
  return 2 ** a;
}
// console.log(posCom(1));
// console.log(posCom(3));
// console.log(posCom(10));


// console.log(reverse([1, 2, 3, 4]));
// console.log(reverse([9, 9, 2, 3, 4]));


