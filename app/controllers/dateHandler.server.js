'user strict';

var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

function dateHandler() {
    var date;
    var unixTime;
    var natTime;
    var rtnVal;
    
    this.getDate = function(req, res) {
        if(/^\d+$/.test(req.params.date)) {
            unixTime = parseInt(req.params.date, 10);
            date = new Date(unixTime * 1000);
            natTime = months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
        } else {
            var dateArray = req.params.date.split(" ");

            // date = new Date(req.params.date);
            unixTime = Date.parse(req.params.date) / 1000;
            natTime = dateArray[0] + " " + dateArray[1] + " " + dateArray[2];
        }
        
        rtnVal = {"unix": unixTime, "natural": natTime};
        
        return res.json(rtnVal);

    };
}


module.exports = dateHandler;
