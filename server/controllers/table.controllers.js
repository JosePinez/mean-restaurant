const Table = require('../models/table');

const tableCtrl = {};

tableCtrl.getTables= async (req,res) =>{
    const tables = await Table.find();
    res.json(tables);
};

tableCtrl.getTable = async (req,res) =>{
    try{
        const table = await Table.findById(req.params.id);
        res.json(table);
    }catch (error){
        res.json({status:'Table not found'})
    }
};

tableCtrl.createTable = async (req,res) =>{
    try{
        const table = new Table({
            id_restaurant: req.body.id_restaurant,
            number: req.body.number,
            capacity: req.body.capacity
        });
        await table.save();
        res.json({status: 'Table saved'});
    }catch (error){
        res.json({status:'Failed to create table'})
    }
};

tableCtrl.editTable = async (req,res) => {
    try{
        const { id } = req.params;
        const table = {
            id_restaurant: req.body.id_restaurant,
            number: req.body.number,
            capacity: req.body.capacity
        };
        await Table.findByIdAndUpdate(id, {$set:menu}, {new: true});
        res.json({status:'Table updated'})
    }catch (error){
        res.json({status:'Failed to edit table'})
    }
};

tableCtrl.deleteTable = async (req,res) => {
    try{
        await Table.findByIdAndDelete(req.params.id);
        res.json({status: 'Table deleted'})
    }catch(error){
        res.json({status:'Table not exits'})
    }
};
module.exports = tableCtrl;