const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const config = require('./mainServer/config.js'); 

const app = express();

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, 'client-spm/build')));

// require('./mainServer/Routes/index')(app)


app.use('*', express.static(path.join(__dirname, 'client-spm/build')));
app.listen(config.PORT,() => {
    console.log('Server started on port 4000');
});






