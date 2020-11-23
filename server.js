// setting var's for dependencies
const express = require('express');
const p = require('path');
const fs = require('fs');

//setting our port info var
const PORT = process.env.PORT || 3000;

//for accessing the info
const dbJson = require('./db/db.json')

//assigning the express function to a var
const app = express();

//telling express to use the public folder to access files
app.use( express.static('public') )

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


//importing api routes
require("./api_routes")(app);
require("./html_routes")(app);

app.listen(PORT, function () {
    console.log("Taking Notes on PORT " + PORT);
    
});
