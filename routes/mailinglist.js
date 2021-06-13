const express = require('express');
const router = express.Router();

const isAuthenticated = require("../config/middleware/isAuthenticated");
const mailingList_controller = require('../controllers/mailingList_controller');

router.get('/', isAuthenticated, mailingList_controller.mailingList);

router.post('/sendnew', isAuthenticated, mailingList_controller.sendNewMember);

module.exports = router;