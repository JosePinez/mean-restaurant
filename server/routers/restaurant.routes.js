const express = require('express');
const router = express.Router();
const restaurantCtrl = require('../controllers/restaurant.controllers');

const md_auth = require('../middleware/authenticated');

router.get('/',md_auth.ensureAuth, restaurantCtrl.getRestaurants);
router.post('/', restaurantCtrl.createRestaurant);
router.get('/:id', restaurantCtrl.getRestaurant);
router.put('/:id', restaurantCtrl.editRestaurant);
router.delete('/:id', restaurantCtrl.deleteRestaurant);


module.exports = router;