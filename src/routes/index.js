const express = require('express');
const router = express.Router();
const handlers = require('../handlers');

router.get('/locations', handlers.getLocations);
router.get('/locations/:id', handlers.getLocation);
router.post('/locations', handlers.createLocation);
router.put('/locations/:id', handlers.updateLocation);
router.delete('/locations/:id', handlers.deleteLocation);

module.exports = router;