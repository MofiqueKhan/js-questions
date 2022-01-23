var arr = [1,2,3,4,5,6,7,8];

var a = arr.map(check);
function check(a){
    return a * 10
}

console.log(a);

var ary = [
    {fname : "mofique" , lname : "khan"},
    {fname : "hamran"  , lname : "khilji"},
    {fname : "ayan" , lname : "khatai"},
]

var b = ary.map(test);
function test(y){
    return y.fname +" "+ y.lname
}
console.log(b);