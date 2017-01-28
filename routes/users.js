/**
 * File Name: users.js
 * Author: Mohammed Juned Ahmed
 * Website Name: https://comp308assignment1.herokuapp.com/
 * File Description:
 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
