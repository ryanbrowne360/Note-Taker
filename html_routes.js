const p = require("path");

module.exports = (app) => {

    // 1 app.get - > return the 'notes.html file'

    app.get("/notes", function (req, res) {
        res.sendFile(p.join(__dirname, '/public/notes.html'));
    });

    // 2 app.get - > return the 'index.html file'

    app.get("*", function (req, res) {
        res.sendFile(p.join(__dirname, '/public/index.html'));
    });

};