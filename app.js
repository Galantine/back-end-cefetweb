const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const port = 3001

// db connection
require('./src/models');


const indexRouter = require('./src/routes/index');
const usersRouter = require('./src/routes/users');
const loginRouter = require('./src/routes/login');

const app = express();

// auth setup
const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());
require('./src/services/auth');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;
