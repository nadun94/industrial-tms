const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const config = require('./mainServer/config.js'); 

const app = express();

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, 'client/build')));

app.use('*', express.static(path.join(__dirname, 'client/build')));
app.listen(config.PORT,() => {
    console.log('Server started on port 5000');
});






