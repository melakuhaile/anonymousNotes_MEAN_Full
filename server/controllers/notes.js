var mongoose = require('mongoose');
var Note = mongoose.model('Note');

module.exports = {
    create: (req,res) => {
        console.log(req.body);
        var newNote = new Note(req.body);
        newNote.save((err, savedNote)=>{
            if(err){
                console.log("bad");
                res.json(err);
            }else{
                console.log("saved")
                res.json(newNote);
            }
        })
    },

    show: (req, res) => {
        console.log('show');
        Note.find({}, (err, data) => {
            if(err) {
                let errors = [];
                for (let i in err.errors) {
                    errors.push(err.errors[i].message);
                }
                return res.status(400).send(errors)
            } else {
                return res.json(data);
            }
        })
    }
}