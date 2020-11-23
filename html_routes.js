const p = require("path");

module.exports = (app) => {

    // getting the notes html file

    app.get("/notes", function (req, res) {
        res.sendFile(p.join(__dirname, '/public/notes.html'));
    });

    // getting the index html file

    app.get("*", function (req, res) {
        res.sendFile(p.join(__dirname, '/public/index.html'));
    });

};
