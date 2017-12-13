var Notes = require('./../controllers/notes.js');
var path = require('path');
var fs = require('fs');

module.exports = (app) => {
    app.post('/api/notes', Notes.create);
    app.get('/api/notes', Notes.show);
    app.all("*", function(req,res,next){
        res.sendFile('./../../public/dist/index.html');
    });

}