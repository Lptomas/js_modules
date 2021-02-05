# nodejs Module :  simply_date_time

Super basic and simply way to get some object with separated date and time values.

Useful to build costum data and time values.

This is based on https://usefulangle.com/post/187/nodejs-get-date-time  - give him some credits


How to Use:



howto.js 

const dt = require('simply_date_time');

const time = dt.simply_date_time();


const path_date = time.year +"-"+ time.month + "-" + time.day;

const path_time= time.h +"-"+ time.m + "-" + time.s;

console.log(path_date);

console.log(path_time);

console.log(time.ts);


Output:

2021-01-27

22-10-52

1611786856623 







---notes
npm version patch
npm publish
