var mongoose = require('mongoose');
var NoteSchema = mongoose.Schema({
    note: 'string',
    date: { type: Date, default: Date.now },
}, {timestamps: true});
mongoose.model('Note', NoteSchema);