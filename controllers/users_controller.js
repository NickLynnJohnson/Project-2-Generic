var db = require('../models');

//this is the users_controller.js file
exports.registrationPage = function(req,res) {
  res.render('users/registration', {
    layout: 'main-registration'
  });
};

exports.signOutUser = function(req,res) {
  req.logout();
  res.redirect("/");
};

// login
exports.loginUser = function(req, res) {
    // Sending the user back to the members page if they aren't logged in
  res.json("/");
};

// Register a user
exports.signUpUser = function(req,res) {

  db.User.findAll({
    where: {username: req.body.username}
  }).then(function(users) {
    if (users.length > 0) {
      res.json({
        duplicateUser: true
      });
    //At some point, make sure that only one user can be associated with an email.
    } else {
      db.User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      }).then(function() {
        res.send({redirect: '/'});
      }).catch(function(err) {
        res.json(err);
      });
    }
  })
};

