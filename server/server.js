const   calculationHistory = [];

const express = require('express');
const bodyParser = require('body-parser')
// const blahblahblah = require('whatever data.js exports?')

const app = express();
const PORT = 5000;


app.use(express.static('server/public'));
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res) => {
    console.log('in GET /');
    res.send();
});

app.post('/', (req, res) => {
    console.log('in POST /');
    console.log('req.body', req.body);
    numberGuesses.push(req.body);
    res.sendStatus(201);
});

// app.get('/', (req, res) => {
//     console.log('in GET /');
//     res.send();
// });

// app.post('/', (req, res) => {
//     console.log('in POST /');
//     console.log('req.body', req.body);
//     numberGuesses.push(req.body);
//     res.sendStatus(201);
// });


app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
});