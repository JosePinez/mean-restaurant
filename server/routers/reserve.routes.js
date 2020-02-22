const express = require('express');
const router = express.Router();
const reserveCtrl = require('../controllers/reserve.controllers');

const md_auth = require('../middleware/authenticated');

router.get('/', md_auth.ensureAuth,reserveCtrl.getReserves);
router.post('/',md_auth.ensureAuth, reserveCtrl.createReserve);
router.get('/:id',md_auth.ensureAuth, reserveCtrl.getReserve);
router.put('/:id',md_auth.ensureAuth, reserveCtrl.editReserve);
router.delete('/:id',md_auth.ensureAuth, reserveCtrl.deleteReserve);

module.exports = router;