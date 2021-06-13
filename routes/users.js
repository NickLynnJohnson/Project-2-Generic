const express = require('express');
const router  = express.Router();

const passport = require("../config/passport");
const users_controller = require('../controllers/users_controller');
const isAuthenticated = require("../config/middleware/isAuthenticated");

router.get('/signup', users_controller.registrationPage);

router.get('/sign-out', users_controller.signOutUser);

router.post('/login', passport.authenticate("local"), users_controller.loginUser);

router.post('/signup', users_controller.signUpUser);

module.exports = router;