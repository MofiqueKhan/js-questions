var a = {
    fname : 'mofique',
    lname : 'khan',
    compName : ["oppo","vivo","samsung"],
    age  : 19,
    living : {
        city : "jodhpur",
        country : "india" ,
    },
    salary : function(){
        return 25000;
    },
    fullname : function(){
        return this.fname +" " + this.lname;
    }
    
}

// console.log(a);
// console.log(a.compName);
// console.log(a.fullname());
// console.log(a.salary());
// console.log(a.living);
// console.log(a.living.city);


var XYZ = new Object();

XYZ.fname = 'mofique';
XYZ.lname = 'khan'; 
XYZ.age = 19;

// console.log(XYZ);
// console.log(XYZ.age);

var stud = [
    { Name : 'mofique' , age : 19 },
    { Name : 'masuma' , age : 18 },
    { Name : 'Ebaad' , age : 20 },

];

// console.log(stud);
for(var a =0;a< stud.length;a++){
    // console.log(stud[a].Name +" " + stud[a].age);
}

var a = {
    fname : 'mofique',
    lname : 'khan',
    compName : ["oppo","vivo","samsung"],
    age  : 19,
    clg : "lucky institute"
};

for(var key in a){
    // console.log(key + ": "+a[key]);
}