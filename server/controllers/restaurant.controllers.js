const Restaurant = require('../models/restaurant');

const restaurantCtrl = {};

restaurantCtrl.getRestaurants = async (req,res) =>{
    const restaurants = await Restaurant.find();
    res.json(restaurants);
};

restaurantCtrl.getRestaurant = async (req,res) =>{
    try{
        const restaurant = await Restaurant.findById(req.params.id);
        res.json(restaurant);
    }catch (error){
        res.json({status:'Restaurant not found'})
    }
};

restaurantCtrl.createRestaurant = async (req,res) =>{
    try{
        const restaurant = new Restaurant(req.body);
        await restaurant.save();
        res.json({status: 'Restaurant saved'});
    }catch (error){
        res.json({status:'Failed to create restaurant'})
    }
};

restaurantCtrl.editRestaurant = async (req,res) => {
    try{
        const { id } = req.params;
        const reserve = {
            name: req.body.name,
            address: req.body.address,
            capacity: req.body.capacity,
            timeTable: req.body.timeTable
        };
        await Restaurant.findByIdAndUpdate(id, {$set:menu}, {new: true});
        res.json({status:'Restaurant updated'})
    }catch (error){
        res.json({status:'Failed to edit restaurant'})
    }
};

restaurantCtrl.deleteRestaurant = async (req,res) => {
    try{
        await Restaurant.findByIdAndDelete(req.params.id);
        res.json({status: 'Restaurant deleted'})
    }catch(error){
        res.json({status:'Restaurant not exits'})
    }
};
module.exports = restaurantCtrl;
