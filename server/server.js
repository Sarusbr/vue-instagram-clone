const express = require('express');
const path = require('path');
const app = express();

const {databaseConfig} = require('./config/database.js');
const {checkUser} = require('./users/checkUser.js');
const {createUser} = require('./users/createUser.js');

const publicFolder = '/../pages';

app.use(express.static(path.join(__dirname, publicFolder)));





app.get('/', (req, res) => {
    res.statusCode(200).sendFile(path.join(__dirname, publicFolder + '/index.html'));
});


app.post('/checkUser', (req, res) => {

    const username = req.body.username ?? undefined;
    const password = req.body.password ?? undefined;
    
    if(username == "")
    res.end("Username cannot be empty");

    checkUser(username, (status)=>{
        console.log(status);
        res.end(status);
        }, password);
});

app.post('/createUser', (req, res) => {

    const newName = req.body.password ?? undefined;
    const newMail = req.body.password ?? undefined;
    const newUsername = req.body.username ?? undefined;
    const newPassword = req.body.password ?? undefined;
    
    if(newName == undefined || newMail == undefined || newUsername == undefined || newPassword == undefined)
        res.end("You must fill in all fields");

    checkUser(newUsername,(status)=>{
        console.log(status);
        if (status == "Available")
            res.end("Username is used");
        else if (status == "NotAvailable")
            createUser(newName, newMail ,newUsername, newPassword, (status)=>{
                res.end(status);
            });
        });
});






app.listen(process.env.PORT || 80);


