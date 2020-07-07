const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

// router.use(bodyParser.urlencoded({ extended: true }));
// router.use(bodyParser.json());

router.get('/', function(_req, res, next) {
  try {
    const data = fs.readFileSync(path.join(__dirname, '../quotes.json'));
    const quotes = JSON.parse(data);

    res.json(quotes);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.get('/random', function(_req, res, next) {
  try {
    const data = fs.readFileSync(path.join(__dirname, '../quotes.json'));
    const quotes = JSON.parse(data);
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    res.json(randomQuote);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
