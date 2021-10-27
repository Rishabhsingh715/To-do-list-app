const mongoose  = require('mongoose');


// mongoose is already connected to the db with our import, now we are going to define
// the schema and the model class. (model class constructs the documents.)
const taskSchema = new mongoose.Schema({
    description:{
        type: String,
        require: true
    },
    date: {
        type:String,
        require: true
    }
});

const Contact = mongoose.model('Contact',taskSchema);
module.exports = Contact;
