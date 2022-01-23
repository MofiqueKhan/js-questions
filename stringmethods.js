var str = "the quick brown fox jumps over the lazy dogs."
    // 1. length property
var a = str.length;
console.log(a);

    // 2. lowercase method

var L = str.toLowerCase();
console.log(L);

    // 3. UpperCase method

var U = str.toUpperCase();
console.log(U);

    // 4. includes method

var I = str.includes("ox");
console.log(I);

    // 5. startwith method

// var S = str.startsWith("the");
var S = str.startsWith("The");
console.log(S);

    // 6. endswith method

// var E = str.endsWith("the");
var E = str.endsWith("dogs.");
console.log(E);

    // 7. search method 

// var s = str.search("thE");
var s = str.search("the");
console.log(s);// 14. charCodeAt method
var i = str.indexOf("the");
console.log(i);

    // 10. lastindexof method

var l = str.lastIndexOf("the");
console.log(l);
    
    // 11. replace method

var R = str.replace("fox" , "lomdi");
console.log(R);

    // 12. trim method 

var T = str.trim();
console.log(T);

    // 13. charAt method

var C = str.charAt(20);
console.log(C);

    // 14. charCodeAt method

var CCA = str.charCodeAt(1);
console.log(CCA);

    // 15. FromcharCode method    

var FCC = String.fromC// 14. charCodeAt methodharCode(36);
console.log(FCC);

    // 16. concat method

var str2 = " hello"

var cnct = str.concat(str2);
console.log(cnct);

    // 17. split method 

var sp = str.split("t");
console.log(sp);

    // 18. repeat method

var rpt = str.repeat(2);
console.log(rpt);

    // 19. slice method 

var slc = str.slice(3 , 20);
var slc = str.slice(-20);
console.log(slc);

    // 20. substr method 

var sbstr = str.substr(3,20);
console.log(sbstr);

    // 21. substring method 

var substr = str.substring(2,6);
console.log(substr);

    // 22. tostring method 

var c = 400;
console.log(c + 20);
var tstr =  c.toString();
console.log(tstr + 20);

    // 23. valueof method 

var V = str.valueOf();
console.log(V);