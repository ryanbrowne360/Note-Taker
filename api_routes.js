const fs = require("fs");

module.exports = (app) => {

    let db = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));

    // getting info from api

    app.get('/api/notes', function (req, res) {
        res.send(db);
        console.log(db)
    })
    
    // posting info from api

    app.post('/api/notes', function (req, res) {
        let newNote = req.body;
        let highestId = 1;
        if (db.length) {
            highestId = Math.max(...(db.map(note => note.id)));
            highestId++        
        }

        newNote.id = highestId;
        db.push(newNote);
        res.json(db);

        fs.writeFileSync( 'db/db.json', JSON.stringify( db ) )
        res.send( db )
    });

    // deleting info from api

    app.delete('/api/notes/:id', function (req, res) {
        let deleteNote = req.params.id
        db = db.filter( note => note.id != deleteNote)
        res.end("Note has been deleted");

});
}