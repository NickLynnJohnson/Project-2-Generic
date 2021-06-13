const express = require('express');
const router  = express.Router();

const isAuthenticated = require("../config/middleware/isAuthenticated");

const search_controller = require('../controllers/search_controller');

// display search bar
router.get('/', isAuthenticated, search_controller.index);

// post action to utilize submitted query params, ask API for data, return data back and render on page
router.get("/new", isAuthenticated, search_controller.search)


module.exports = router;