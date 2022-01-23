function addition (a,b){
    return 
}


for (i=1; i<=9; i++){
    document.write(i + "<br/>")
}

var i=10;
while (i<=20)
{
    document.write(i + "<br/>");
    i++;
}

document.write("<b>using do....while loops </br><br>");
var i = 2;
document.write ("even numbers less than 20<br />");
do
{
    document.write(i+"<br/>");

    i = i + 2;
    
}
while(i<20)

function demo(){
    var phone = new Array(5);
    phone[ 0 ] = "apple";
    phone[ 1 ] = "panasonic";
    phone[ 2 ] = "asus";
    phone[ 3 ] = "redmi";
    phone[ 4 ] = "poco";
    phone[ 5 ] = "1 plus";
    phone[ 6 ] = "oppo";
    phone[ 7 ] = "vivo";
    phone[ 8 ] = "samsung";
    for (var i in phone)
    {
        document.write("phone["  + i +"] = " + phone[i] + "<br/>")
    }
}



var a=-3;
var b=-6;
var c= (a+b);
document.write(c);


function getname(variable){  
    alert(variable*variable+5);  
 }