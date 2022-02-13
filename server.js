const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ejs = require('ejs');
;

app.set('view engine', 'ejs');

mongoose.connect('mongodb+srv://trademak:dWUCNpb68jxSKk0U@serverlessinstance1.ucout.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const myObject = mongoose.Schema({
    timestamp: String,
    email: String,
    discord_id: String,
    discord_name: String,
    status: String,
    twitter: String,
    cust_id: String,
    channel: String,
  });

  const users = mongoose.model("subscriber", myObject);

app.get('/', (req, res) => {
    users.find({}, function(err, subscribers) {
        res.render('index', {
            subList: subscribers
        })
    })
})
 
 
 const port = process.env.PORT || 8000;
 
 
 app.listen(port, () => {
     console.log("App is running on port " + port);
 });