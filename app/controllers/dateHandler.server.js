'use strict';

var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function dateHandler() {

    this.getDate = function(req, res) {
        var date;
        var unixTime = null;
        var natTime = null;
        var rtnVal;

        if(/^\d+$/.test(req.params.date)) {
            unixTime = parseInt(req.params.date, 10);
            date = new Date(unixTime * 1000);
            natTime = months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();

        } else if(validDate(req.params.date)) {
            var dateArray = req.params.date.split(" ");
            unixTime = Date.parse(req.params.date) / 1000;
            natTime = dateArray[0] + " " + dateArray[1] + " " + dateArray[2];

        }
        
        rtnVal = {"unix": unixTime, "natural": natTime};
        
        return res.json(rtnVal);

    };
}

function validDate(dateChk) {
    var dt = new Date(dateChk);
    if(Object.prototype.toString.call(dt) === "[object Date]") {
        if(isNaN(dt.getTime())) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}


module.exports = dateHandler;
