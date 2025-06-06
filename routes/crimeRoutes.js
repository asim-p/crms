const express = require('express');
const router = express.Router();
const crimeControllers = require('../controllers/crimeController')

router.get('/',crimeControllers.crime_index);
router.get('/report',crimeControllers.crime_report_get);
router.get('/:id',crimeControllers.crime_details);
router.delete('/:id',crimeControllers.crime_delete);
router.post('/',crimeControllers.crime_report_post);

module.exports=router;