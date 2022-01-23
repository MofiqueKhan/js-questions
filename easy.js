function addUp(num) {
  return (num * (num + 1)) / 2;
}
//   console.log(addUp(4), 10);
// console.log(addUp(13), 91);
// console.log(addUp(600), 180300);
// console.log(addUp(392), 77028);
// console.log(addUp(53), 1431);
// console.log(addUp(897), 402753);
// console.log(addUp(23), 276);
// console.log(addUp(1000), 500500);
// console.log(addUp(738), 272691);
// console.log(addUp(100), 5050);
// console.log(addUp(925), 428275);
// console.log(addUp(1), 1);
// console.log(addUp(999), 499500);
// console.log(addUp(175), 15400);
// console.log(addUp(111), 6216);

function bitwiseAND(n1, n2) {
  return n1 & n2;
}
// console.log(matchHouses(0), 0);

function bitwiseOR(n1, n2) {
  return n1 | n2;
}

function bitwiseXOR(n1, n2) {
  return n1 ^ n2;
}
// console.log(bitwiseAND(7, 12), 4);
// console.log(bitwiseOR(7, 12), 15);
// console.log(bitwiseXOR(7, 12), 11);

// console.log(bitwiseAND(32, 17), 0);
// console.log(bitwiseOR(32, 17), 49);
// console.log(bitwiseXOR(32, 17), 49);

// console.log(bitwiseAND(13, 19), 1);
// console.log(bitwiseOR(13, 19), 31);
// console.log(bitwiseXOR(13, 19), 30);

function matchHouses(n){
    return n*6- (n-1);
  }
// console.log(matchHouses(1), 6);
// console.log(matchHouses(17), 86);
// console.log(matchHouses(36), 181);
// console.log(matchHouses(15), 76);
// console.log(matchHouses(99), 496);
// console.log(matchHouses(3), 16);
// console.log(matchHouses(87), 436);


let per= 70;

if(per>=80 && per <=100){
  // console.log("you are in merit");
}else if(per>=60 && per <=80){
  // console.log("you are in Ist division");
}else if(per>=45 && per <=60){
  // console.log("you are in IInd division");
}else if(per>=33 && per <=45){
  // console.log("you are in IIIrd division");
}else if(per<33){
  // console.log("you are failure");
}else {
  // console.log("enter valid percentage");
}


var a=1;
while (a<=10){
  document.write("hello mofique</br>");
  // console.log("hello mofique");
  a=a+1;
}

for(var a=1;a<=10;a++){
  if(a==5 ) {
    console.log("moffu");
    continue;

  }
  console.log("mofique");
}

for(var a = 1; a<=100;a++){
  if (a%2!=0){
    console.log(a);
  }
}

for(var a= 1; a<=100;a=a+10){
  for(var b= a; b<a+10;b++){
    document.write(b +" ");
  }document.write("<br>");
}