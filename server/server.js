const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('server/public'));

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


app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
});