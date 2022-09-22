const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const multer = require('multer');
const fs =  require('fs');

const {databaseConfig, publicFolder, imagesFolder} = require('./config/config.js');
const {checkUser} = require('./users/checkUser.js');
const {createUser} = require('./users/createUser.js');
const {getUser} = require('./users/getUser.js');
const {createPost} = require('./posts/createPost.js');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname +'/posts/images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix +"." +  file.originalname.split('.')[1])
    }
  });
  
const upload = multer({ storage: storage })


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
    res.end(JSON.stringify({status:"username cannot be empty"}));
    else
        checkUser(username, password).then(result => res.end(JSON.stringify(result)));
});


app.post('/createUser', (req, res) => {

    const newName = req.body.name ?? undefined;
    const newEmail = req.body.email ?? undefined;
    const newUsername = req.body.username ?? undefined;
    const newPassword = req.body.password ?? undefined;
    
    if(newName == undefined || newEmail == undefined || newUsername == undefined || newPassword == undefined){
        res.end(JSON.stringify({status:"You must fill in all fields"}));
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
    const username = req.query.username ?? undefined;
    const password = req.query.password ?? undefined;
    
    if(username == undefined || password == undefined)
        res.end(JSON.stringify({status:"You must fill in all fields"})); 

     getUser(username, password).then(result => res.end(JSON.stringify(result)));
});

app.post('/createPost',upload.single("postImage"), (req, res) => {
    const username = req.body.username ?? undefined;
    const password = req.body.password ?? undefined;
    const description = req.body.description ?? undefined;
    const profilePhoto = req.body.profilePhoto ?? undefined;
    const postImage = req.file ?? undefined;

    if(username == undefined || password == undefined || postImage == undefined || description == undefined || profilePhoto == undefined)
    res.end(JSON.stringify({status:"You must fill in all fields"}));

    checkUser(username, status=>{
        if(status[0].status == "NotAvailable")
            res.end(JSON.stringify({status:"NotAvailable"}));
     },password);


    createPost(username, profilePhoto, imagesFolder + postImage.filename, description).then(result => res.end(JSON.stringify(result , {"postImage":"/posts/images/" + postImage.filename})));
});

app.get(imagesFolder + ':postImageFullName', (req, res) => {
   const postImageFullName = req.params.postImageFullName;
   fs.readFile(__dirname + imagesFolder + postImageFullName, function (err, content) {
        res.statusCode(200).end(content);
    });
});


app.listen(process.env.PORT || 80);


