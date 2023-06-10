const express = require('express')
const { DriverController, PatientController } = require('../../controllers/index');
const router = express.Router();
router.post('/patient', PatientController.createPatientProfile);
router.get('/patientlogin', PatientController.LoginPatient);
router.get('/patient', PatientController.getPatientProfile);
router.delete('/patient/:id', PatientController.deletePatientProfile);

router.post('/driver', DriverController.createDriver);
router.get('/driver', DriverController.getDriver);
router.delete('/driver', DriverController.deleteDriver);

module.exports = router;