const express = require('express');
const router = express.Router();
const reserveCtrl = require('../controllers/reserve.controllers');

const md_auth = require('../middleware/authenticated');

router.get('/', md_auth.ensureAuth,reserveCtrl.getReserves);
router.post('/', reserveCtrl.createReserve);
router.get('/:id', reserveCtrl.getReserve);
router.put('/:id', reserveCtrl.editReserve);
router.delete('/:id', reserveCtrl.deleteReserve);

module.exports = router;