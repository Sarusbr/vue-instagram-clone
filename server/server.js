const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');

app.use(express.static(path.join(__dirname, '../pages')));

app.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, '../pages/index.html'),(err,data)=>{
        res.end(data);
    });
    
});

app.listen(80);


