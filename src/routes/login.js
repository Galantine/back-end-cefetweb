var express = require('express');
var router = express.Router();
const passport = require('passport');

router.post('/', passport.authenticate('local'));

module.exports = router;
