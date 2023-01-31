const express = require ('express')
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.json());

app.use(express.static('./'));

app.listen(8000, () =>{
    console.log("!");
})

app.get('/', function(req, res){
    console.log("!2")
    console.log(path.join(__dirname, '/dist/index.html'))
    res.sendFile(path.join(__dirname, '/dist/index.html'));
});




app.get('/data', (req,res)=>{
    console.log("Data success")

    // res.send([
    //     { Category: 'N/S', Type: 'N', Qtype1: '1 ipsum...', Qtype2: '1', id: 1 },
    //     { Category: 'N/S', Type: 'S', Qtype1: '2 ipsum...', Qtype2: '2', id: 2 },
    //     { Category: 'N/S', Type: 'T', Qtype1: '3 ipsum...', Qtype2: '3', id: 3 },
    //     { Category: 'N/S', Type: 'F', Qtype1: '4 ipsum...', Qtype2: '4', id: 4 },
    //     { Category: 'N/S', Type: 'J', Qtype1: '5 ipsum...', Qtype2: '5', id: 5 },
    //     { Category: 'N/S', Type: 'P', Qtype1: '6 ipsum...', Qtype2: '6', id: 6 },
    //     { Category: 'N/S', Type: 'N', Qtype1: '7 ipsum...', Qtype2: '7', id: 7 },
    //     { Category: 'N/S', Type: 'S', Qtype1: '8 ipsum...', Qtype2: '8', id: 1 },
    //     { Category: 'N/S', Type: 'S', Qtype1: '2 ipsum...', Qtype2: '2', id: 2 },
    //     { Category: 'N/S', Type: 'T', Qtype1: '3 ipsum...', Qtype2: '3', id: 3 },
    //     { Category: 'N/S', Type: 'F', Qtype1: '4 ipsum...', Qtype2: '4', id: 4 },
    //     { Category: 'N/S', Type: 'J', Qtype1: '5 ipsum...', Qtype2: '5', id: 5 },
    //     { Category: 'N/S', Type: 'P', Qtype1: '6 ipsum...', Qtype2: '6', id: 6 },
    //     { Category: 'N/S', Type: 'N', Qtype1: '7 ipsum...', Qtype2: '7', id: 7 },
    //     { Category: 'N/S', Type: 'S', Qtype1: '8 ipsum...', Qtype2: '8', id: 1 }
    // ]
    // )


    fs.readFile('./questions.json', 'utf-8', (err, data)=>{
        if(err) throw err;
        res.send(data);
    })
    
})