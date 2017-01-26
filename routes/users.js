/**
 * File Name: users.js
 * Author: Mohammed Juned Ahmed
 * Website Name:
 * File Description:
 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
