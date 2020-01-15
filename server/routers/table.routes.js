const express = require('express');
const router = express.Router();
const tableCtrl = require('../controllers/table.controllers');
router.get('/', tableCtrl.getTables);
router.post('/', tableCtrl.createTable);
router.get('/:id', tableCtrl.getTable);
router.put('/:id', tableCtrl.editTable);
router.delete('/:id', tableCtrl.deleteTable);
module.exports = router;