//STEP 1
/*
let monthNum = prompt('Enter a month (1-12)');
let year = prompt('Enter the year (YYYY)')

let monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let month = monthNum - 1;

let date = new Date(year,monthNum,0);
alert(`The number days in ${monthName[month]} ${year} is ${date.getDate()}`);
*/

//STEP 2
/*
let date = new Date(prompt("Enter a date (MM/DD/YYYY"));
let monthList = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let month = date.getMonth();

console.log(`The month is ${monthList[month]}`);
*/

//STEP 3
/*
let date = new Date(prompt("Enter a date (MM/DD/YYYY"));

if (date.getDay() == 0 || date.getDay() == 6){
    console.log('This date was a weekend');
}else{
    console.log('This date was a weekday');
}
*/

//STEP 4
/*
let today = new Date();
let x = today.getDay();

let days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'];
console.log(`Today is ${days[x]}`);
console.log(`Yesterday was ${days[x-1]}`);
*/

//STEP 5
/*
let today = new Date();
console.log(today.toDateString().slice(0, 1));
*/