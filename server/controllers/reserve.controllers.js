const Reserve = require('../models/reserve');

const reserveCtrl = {};

reserveCtrl.getReserves = async (req,res) =>{
    const reserves = await Reserve.find();
    res.json(reserves);
};

reserveCtrl.getReserve = async (req,res) =>{
    try{
        const reserve = await Reserve.findById(req.params.id);
        res.json(reserve);
    }catch (error){
        res.json({status:'Reserve not found'})
    }
};

reserveCtrl.createReserve = async (req,res) =>{
    try{
        const reserve = new Reserve({
            id_restaurant: req.body.id_restaurant,
            date: req.body.date,
            time: req.body.time
        });
        await reserve.save();
        res.json({status: 'Reserved saved'});
    }catch (error){
        res.json({status:'Failed to create reserve'})
    }
};

reserveCtrl.editReserve = async (req,res) => {
    try{
        const { id } = req.params;
        const reserve = {
            id_restaurant: req.body.id_restaurant,
            date: req.body.date,
            time: req.body.time
        };
        await Reserve.findByIdAndUpdate(id, {$set:menu}, {new: true});
        res.json({status:'Reserve updated'})
    }catch (error){
        res.json({status:'Failed to edit reserve'})
    }
};

reserveCtrl.deleteReserve = async (req,res) => {
    try{
        await Reserve.findByIdAndDelete(req.params.id);
        res.json({status: 'Reserve deleted'})
    }catch(error){
        res.json({status:'Reserve not exits'})
    }
};
module.exports = reserveCtrl;