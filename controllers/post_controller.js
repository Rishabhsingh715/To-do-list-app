const Contact = require('../models/tasks');

module.exports.create = function(req,res){
  console.log(req.body);
    Contact.create({
        description: req.body.description,
        date: req.body.date
    },function(err,newContact){
        if(err){
            console.log('error occured in contact creation');
        return;};

        console.log('*****',newContact);
        
})

Contact.find({},function(err, contacts){
    if(err){
        console.log('error fetching the contacts');
        return;
    }
    
    return res.render('home',{
        Tasklist: contacts
    });
});
   
};