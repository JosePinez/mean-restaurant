const express = require('express');
const router = express.Router();
const restaurantCtrl = require('../controllers/restaurant.controllers');

const md_auth = require('../middleware/authenticated');

router.get('/',md_auth.ensureAuth, restaurantCtrl.getRestaurants);
router.post('/',md_auth.ensureAuth, restaurantCtrl.createRestaurant);
router.get('/:id',md_auth.ensureAuth, restaurantCtrl.getRestaurant);
router.put('/:id',md_auth.ensureAuth, restaurantCtrl.editRestaurant);
router.delete('/:id',md_auth.ensureAuth, restaurantCtrl.deleteRestaurant);


module.exports = router;