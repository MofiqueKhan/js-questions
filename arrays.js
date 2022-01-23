//  var arr = [10,20,30,40];
 

//  for(var a = 0; a <=3;a++){
//      console.log(arr[a]);
//  }

 var arr = new Array();
 arr[0] = 1;
 arr[1] = 2;
 arr[2] = 3;
 arr[3] = 4;
 arr[4];
 arr[5] = 6;
//  console.log (arr);

var arrs= new Array(3);

// for(var a = 0; a<3;a++){
//     arrs[a] = prompt("enter the value");
// }
// console.log (arrs);

// multi dimensional arrays

var arr = [
    ['mofique', 18, "male", "bca"],
    ['hamran', 19, "male", "bca"],
    ['ayan', 17, "male", "bca"],
    ['masuma', 19, "female", "bca"],
    ['suhani', 18, "female", "bca"]
]
//  console.log (arr[0]);


// modifying arrays

arr[0][1]= 20;
//  console.log (arr[0]);

// arrays method :-

            // 1. sort method :-
var s = ["mofique","hamran","ayan","masuma","suhani"];
// console.log(s);

s.sort();
// console.log(s);

            // 2. reverse method :- 
s.reverse();
// console.log(s);

            // 3. pop method :-

s.pop();
// console.log(s);

            // 4. push method :-

s.push("misbah");
// console.log(s);

            // 5. shift method :-

s.shift();
// console.log(s);

            // 6. unshift method :-
s.unshift("ayan");
// console.log(s);

            // 7. concat method :-
var a = ["mofique","masuma","hamran"];
var b = a.concat("ayan","misbah","suhani");

// console.log(b);

            // 8. join method :-

var c = b.join("-");
// console.log(c);

            // 9. slice method :-

var sp = ["mofique","masuma","hamran","ayan","misbah","suhani"];

// console.log(sp);

var cp = sp.slice(1,4);
// console.log(cp);

            // 10. splice method :-

cp.splice(2,0,"afseen","kaif");
// console.log(cp);

            // 11. isArray method :-

             
// var isArr = ["mofique","masuma","hamran","ayan","misbah","suhani"];
// var isArr = "mofique";
var isArr = 20;


var b = Array.isArray(isArr);

// console.log(b);

        // 12. indexof method :-
var isArr = ["mofique","masuma","ayan","hamran","ayan","misbah","suhani"];

// console.log(isArr);

var b = isArr.indexOf("ayan");

// console.log(b);

        // 13. lastindexof method :-

var LI = isArr.lastIndexOf("ayan");
// console.log(LI);

        // 14. includes method :-

var I = isArr.includes("ravi");
var II = isArr.includes("misbah");
// console.log(I);
// console.log(II);

         // 15. some method :-

var ages = [8,10,12,20,22,24];
// console.log(ages);

var j = ages.some(checkeligible);

function checkeligible (age){
        return age >= 25;
}
// console.log(j);

         // 16. every method :-

 var j = ages.every(checkeligible);

function checkeligible (age){
return age >= 5;
}
//   console.log(j);

        // 17 find method :-

var F = ages.find(checkeligible);

function checkeligible(age){
        return age >=18;
}
// console.log(F);

        //18. findindex method :-

var FI = ages.findIndex(checkeligible);

function checkeligible(age){
return age >=18;
}
// console.log(FI);

        //19. filter method :-

var FIL = ages.filter(checkeligible);

function checkeligible(age){
return age >=18;
}
// console.log(FIL);

        //20. toString method :-

var isArr = ["mofique","masuma","ayan","hamran","ayan","misbah","suhani"];

// console.log(isArr.toString());

        // 21. valueof method

// console.log(isArr.valueOf());

        // 22. fill method

// console.log(isArr.fill("moffu"));

        // 23. foreach method

isArr.forEach(function (value, index){
        // console.log(index + " : " + value);
});
        