const Contact = require('../models/tasks');

module.exports.create = function(req,res){

    Contact.create( req.body ,function(err,newContact){
        if(err){
            console.log('error occured in contact creation');
        return;};

        console.log('*****',newContact);

        res.redirect('back');
        
    });


   
};