const express = require('express')
const {DriverController} = require('../../controllers/index');
const router = express.Router();

router.post('/driver', DriverController.createDriver);
router.get('/driver', DriverController.getDriver);
router.delete('/driver', DriverController.deleteDriver);

module.exports = router;