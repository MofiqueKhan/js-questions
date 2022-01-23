        // 1. todate string method

var now = new Date();
console.log(now.toDateString());

        // 2. getdate method

console.log(now.getDate());

        // 3. getyear method

console.log(now.getFullYear());

        // 4. getmonth method

console.log(now.getMonth());

        // 5. getday method

console.log(now.getDay());

        // 6. gethours method

console.log(now.getHours());

        // 7. getseconds method

console.log(now.getSeconds());

        // 8. getmilliseconds method

console.log(now.getMilliseconds());

// isi tarah se hum past ya future ke bhi month ya year daal ke time day etc dekh skte he.

now.setDate(23);
console.log(now);

now.setFullYear(2020);
console.log(now);
console.log(now.getMonth());

now.setMonth(4);
console.log(now);

now.setHours(12);
now.setMinutes(45);
now.setSeconds(30);
console.log(now);


console.log(now.getDate() +"/ " + now.getHours()+"/" + now.getFullYear());