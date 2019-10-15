var express = require("express");
var app = express();
//library to send/receive API requests
var request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req, res)
{
    res.render("search");
});

app.get("/results", function(req, res)
{
    //gets the 'search' name from the / page
    var search = req.query.search;
    //request object
    request("http://omdbapi.com/?s=" + search + "&apikey=thewdb", function(err, response, body)
    {
        //check if a response was successfully retrieved
        if (!err && response.statusCode == 200) //status code 200 means OK
        {
            //the body is returned as a string, so to treat it as an object for our API, we convert it to JSON
            var thisData = JSON.parse(body)
            //send a hardcoded result
            res.render("results", {data: thisData});
        }
    });
});

//connect to localhost:3000
app.listen(3000, function()
{
    console.log("server started.");
});