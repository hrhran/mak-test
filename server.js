const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ejs = require('ejs');
;

app.set('view engine', 'ejs');

mongoose.connect('mongodb+srv://admin:Admin%40123x@testbot.6lv2u.mongodb.net/launchpass?retryWrites=true&w=majority');

const myObject = mongoose.Schema({
    timestamp: String,
    createdAt: String,
    email: String,
    discord_id: String,
    code: String,
    twitter: String,
    subscription: String,
  });

  const users = mongoose.model("subscriber", myObject);

app.get('/', (req, res) => {
    users.find({}, function(err, subscribers) {
        res.render('index', {
            subList: subscribers
        })
    })
})
 e
 
 const port = process.env.PORT || 8000;
 
 
 app.listen(port, () => {
     console.log("App is running on port " + port);
 });