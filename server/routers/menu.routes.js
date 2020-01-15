const express = require('express');
const router = express.Router();
const menuCtrl = require('../controllers/menu.controllers');
router.get('/', menuCtrl.getMenus);
router.post('/', menuCtrl.createMenu);
router.get('/:id', menuCtrl.getMenu);
router.put('/:id', menuCtrl.editMenu);
router.delete('/:id', menuCtrl.deleteMenu);

module.exports = router;