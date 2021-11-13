const   calculations = [];

const express = require('express');
const bodyParser = require('body-parser');
// const blahblahblah = require('whatever data.js exports?')

const app = express();
const PORT = 5000;

app.use(express.static('./server/public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/calculations', (req, res) => {
    console.log('in GET /calculations ');
    res.send(calculations);
});

app.post('/calculations', (req, res) => {
    console.log('in POST /calculations');
    console.log('req.body', req.body);
    calculations.push(req.body.calculationObject);
    res.sendStatus(200);
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