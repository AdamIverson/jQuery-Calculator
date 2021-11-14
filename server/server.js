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

app.get('/additions', (req, res) => {
    console.log('in GET /additions');
    res.send(calculations);
});

app.post('/additions', (req, res) => {
    console.log('in POST /additions');
    console.log('req.body', req.body);
    req.body.sum = Number(req.body.firstInputValue) + Number(req.body.secondInputValue);    console.log(req.body);
    calculations.push(req.body);
    res.send(calculations);
    // res.sendStatus(200);
});

app.get('/subtractions', (req, res) => {
    console.log('in GET /subtractions');
    res.send(calculations);
});

app.post('/subtractions', (req, res) => {
    console.log('in POST /subtractions');
    console.log('req.body', req.body);
    req.body.sum = Number(req.body.firstInputValue) - Number(req.body.secondInputValue);    console.log(req.body);
    calculations.push(req.body);
    res.send(calculations);
    // res.sendStatus(200);
});

app.get('/multiply', (req, res) => {
    console.log('in GET /multiply');
    res.send(calculations);
});

app.post('/multiply', (req, res) => {
    console.log('in POST /multiply');
    console.log('req.body', req.body);
    req.body.sum = Number(req.body.firstInputValue) * Number(req.body.secondInputValue);    console.log(req.body);
    calculations.push(req.body);
    res.send(calculations);
    // res.sendStatus(200);
});

app.get('/divide', (req, res) => {
    console.log('in GET /divide');
    res.send(calculations);
});

app.post('/divide', (req, res) => {
    console.log('in POST /divide');
    console.log('req.body', req.body);
    req.body.sum = Number(req.body.firstInputValue) / Number(req.body.secondInputValue);
    console.log(req.body);
    calculations.push(req.body);
    res.send(calculations);
    // res.sendStatus(200);
});

app.get('/history', (req, res) => {
    console.log('in GET /history');
    res.send(calculations);
});

app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
});