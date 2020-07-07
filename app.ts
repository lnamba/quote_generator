const express = require('express');
const quotes = require('./routes/quotes.ts');
const app = express();

app.use('/quotes', quotes);

module.exports = app;
