const express = require ('express')
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.json());

app.use(express.static('./'));

app.use(express.static('./src'));

var num = 0;
app.listen(8000, () =>{
    console.log("server got started");
    fs.readFile('./number.json', 'utf-8', (err, data)=>{
        let JSONDATA = JSON.parse(data);
        num = JSONDATA[0].number + 1;
    })

})

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/dist/index.html'));
    console.log(num)
    
    fs.readFile('./number.json', 'utf-8', (err, data)=>{
        let JSONDATA = JSON.parse(data);
        num = JSONDATA[0].number + 1;
        JSONDATA[0].number = num;
        data = JSON.stringify(JSONDATA);
        fs.writeFile('./number.json', data, 'utf-8', () => {})
    })
});



app.get('/number', (req,res)=>{
    fs.readFile('./number.json', 'utf-8', (err, data)=>{
        if(err) throw err;
        res.send(data);
    })
    
})


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