const express = require('express');


//This loads the connection to the database 
const db = require('./config/mongoose');

//After the connection is established we are now using the DB.
const Contact = require('./models/tasks');


const app = express();
const port = 8000;

app.use('/', require('./routes'));

//set up the view engine
app.set('view engine', 'ejs');
app.set('views','./views');

app.use(express.urlencoded()); //parser\ middleware;

//middleware 1
app.use(express.static('assets'));


app.listen(port,function(err){
    if(err){
        console.log(`error in running the server: ${error} `);
    }

    console.log(`Server is up and running on port: ${port}`);
});