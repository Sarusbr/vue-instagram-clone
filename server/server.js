const express = require('express');
const path = require('path');
const app = express();

const {databaseConfig} = require('./config/database.js');
const {checkUser} = require('./users/check-user.js');

app.use(express.static(path.join(__dirname, '../pages')));



app.get('/', (req, res) => {
    res.statusCode(200).sendFile(path.join(__dirname, '/../pages/index.html'));
});


app.post('/checkUser', (req, res) => {

    const username = req.query.username ?? "";
    const password = req.query.password ?? "";
    
    if(username == "")
    res.end("Username cannot be empty");

    checkUser(username,password,(status)=>{
        console.log(status);
        res.end(status);
        })
});








app.listen(process.env.PORT || 80);


