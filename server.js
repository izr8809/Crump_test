const express = require ('express')
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.json());

app.use(express.static('./'));

app.use(express.static('./src'));

app.listen(8000, () =>{
    console.log("server got started");
})

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/dist/index.html'));
});




app.get('/data', (req,res)=>{
    console.log("Data success")
    fs.readFile('./questions.json', 'utf-8', (err, data)=>{
        if(err) throw err;
        res.send(data);
    })
    
})

app.get('/resultdata', (req,res)=>{
    console.log("Data success")
    fs.readFile('./result.json', 'utf-8', (err, data)=>{
        if(err) throw err;
        res.send(data);
    })
    
})