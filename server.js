const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const config = require('./mainServer/config.js'); 

const app = express();

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, 'client-spm/build')));

require('./mainServer/Routes/index')(app)


app.use('*', express.static(path.join(__dirname, 'client-spm/build')));
const port =  process.env.PORT || 5000;
app.listen(port,() => {
    console.log('Server started on port 5000');
});






