const express = require('express');
const router = express.Router();
const reserveCtrl = require('../controllers/reserve.controllers');
router.get('/', reserveCtrl.getReserves);
router.post('/', reserveCtrl.createReserve);
router.get('/:id', reserveCtrl.getReserve);
router.put('/:id', reserveCtrl.editReserve);
router.delete('/:id', reserveCtrl.deleteReserve);

module.exports = router;