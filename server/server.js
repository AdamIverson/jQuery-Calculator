const calculations = [];

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(express.static('./server/public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/total', (req, res) => {
        console.log('in GET /total');
        res.send(calculations.sum);
    });

app.get('/calculations', (req, res) => {
    console.log('in GET /calculations');
    res.send(calculations);
});

app.post('/additions', (req, res) => {
    console.log('in POST /additions');
    console.log('req.body', req.body);
    req.body.sum = Number(req.body.firstInputValue) + Number(req.body.secondInputValue);    console.log(req.body);
    calculations.push(req.body);
    res.sendStatus(200);
});

app.post('/subtractions', (req, res) => {
    console.log('in POST /subtractions');
    console.log('req.body', req.body);
    req.body.sum = Number(req.body.firstInputValue) - Number(req.body.secondInputValue);    console.log(req.body);
    calculations.push(req.body);
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