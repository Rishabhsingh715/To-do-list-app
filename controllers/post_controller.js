const Contact = require('../models/tasks');

module.exports.create = function(req,res){

    Contact.create( req.body ,function(err,newContact){
        if(err){
            console.log('error occured in contact creation');
        return;};

        console.log('*****',newContact);
        
    });

Contact.find({},function(err, contacts){
    if(err){
        console.log('error fetching the contacts');
        return;
    }
     console.log(contacts);

    return res.render('home',{
        Tasklist: contacts
    });
});
   
};