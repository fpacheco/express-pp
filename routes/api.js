var express = require('express');
var router = express.Router();

var db = require('../queries');

router.get('/wells', db.getAllWells);
router.get('/wells/:id', db.getSingleWell);
router.post('/wells', db.createWell);
router.put('/wells/:id', db.updateWell);
router.delete('/wells/:id', db.deleteWell);

module.exports = router;
