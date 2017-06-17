const express = require('express');
const router = express.Router();
const handlers = require('../handlers');

router.get('/locations', handlers.getLocations);
router.post('/locations', handlers.createLocation);

module.exports = router;