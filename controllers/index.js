/**
 * do something with the user model
 * var User = require('../models/user');
 */

exports.index = function (req, res) {
  res.render('index', {
    title: 'express-app'
  });
};

exports.something = function (req, res) {
  res.render('something', {
    title: 'something-app'
  });
};
