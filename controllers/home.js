const Contact = require('../models/tasks');

module.exports.home = function(req,res){
   
   Contact.find({},function(err, contacts){
      if(err){
          console.log('error fetching the contacts');
          return;
      }
       console.log(contacts);
  
      return res.render('home.ejs',{
          Tasklist: contacts
      });
  });
   
}

module.exports.deleteTask = function(req, res){
    const id = req.query.id;

    Contact.findByIdAndDelete(id, function(err){
        if(err){
            console.log('error in deleting the file: ',err);
            return;
        }
        console.log('deleted succesfully');
        return res.redirect('back');
    });
}