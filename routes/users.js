var router = require('express').Router();

var usersCtrl = require('../controllers/users');

router.get('/users', usersCtrl.index);

module.exports = router;

