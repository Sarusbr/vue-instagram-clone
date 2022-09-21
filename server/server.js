const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();


const {databaseConfig, publicFolder} = require('./config/config.js');
const {checkUser} = require('./users/checkUser.js');
const {createUser} = require('./users/createUser.js');
const {getUser} = require('./users/getUser.js');

app.use(express.static(path.join(__dirname, publicFolder)));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())




app.get('/', (req, res) => {
    res.statusCode(200).sendFile(path.join(__dirname, publicFolder + '/index.html'));
});


app.post('/checkUser', (req, res) => {

    const username = req.body.username ?? undefined;
    const password = req.body.password ?? undefined;
    
    if(username == undefined)
        res.end("Username cannot be empty");
    else
        checkUser(username, password).then(result => res.end(JSON.stringify(result)));
});


app.post('/createUser', (req, res) => {

    const newName = req.body.name ?? undefined;
    const newEmail = req.body.email ?? undefined;
    const newUsername = req.body.username ?? undefined;
    const newPassword = req.body.password ?? undefined;
    
    if(newName == undefined || newEmail == undefined || newUsername == undefined || newPassword == undefined){
        res.end("You must fill in all fields");    
    }
    else{
        checkUser(newUsername,(status)=>{
            if (status[0].status == "Available")
                res.end("Username is used");
            else if (status[0].status == "NotAvailable")
                createUser(newName, newEmail ,newUsername, newPassword).then(result => res.end(JSON.stringify(result)));
            });
        };
});


app.post('/getUser', (req, res) => {
    const username = req.body.username ?? undefined;
    const password = req.body.password ?? undefined;

    if(username == undefined || password == undefined)
        res.end("You must fill in all fields");    

     getUser(username, password).then(result => res.end(JSON.stringify(result)));
});






app.listen(process.env.PORT || 80);

