const express = require('express');
const morgan = require('morgan');

let app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/../client'));

app.listen(8000);

console.log('LISTENING - localhost:8000');

module.exports = app;
