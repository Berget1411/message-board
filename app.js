var express = require('express');

var indexRouter = require('./routes/index');

var app = express();
app.use(express.urlencoded({ extended: true }));

app.listen(3000);

app.set('view engine', 'ejs');
app.use('/', indexRouter);

module.exports = app;
