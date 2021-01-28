/**
Based on:       https://usefulangle.com/post/187/nodejs-get-date-time
 
 2021-01-27

*/

module.exports.simply_date_time = function (){
        let dt = new Date();
        let ts = Date.now();   // timestamp

        let day = ("0" + dt.getDate()).slice(-2);
        let year = dt.getFullYear();
        let month = ("0" + (dt.getMonth() + 1)).slice(-2);
        let hours = dt.getHours();
        let minutes = dt.getMinutes();
        let seconds = dt.getSeconds();
        let complete = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds

        return dt = {
                        "dt" : complete,
                        "year" : year,
                        "month" : month,
                        "day" : day,
                        "h" : hours,
                        "m" : minutes,
                        "s" : seconds,
                        "tt" : ts
                    };
};
