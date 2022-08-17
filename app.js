const path = require('path');

const express = require('express');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
	res.render('index');
});

app.get('/contato', function (req, res) {
	res.render('contact');
});

app.get('/privacidade', function (req, res) {
	res.render('privacy');
});

app.use(function (error, req, res, next) {
	res.render('500');
});

app.listen(3000);
