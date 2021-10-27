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