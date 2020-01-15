const Menu = require('../models/menu')

const menuCtrl = {};

menuCtrl.getMenus = async (req,res) =>{
   const menus = await Menu.find();
   res.json(menus);
};

menuCtrl.getMenu = async (req,res) =>{
    try{
        const menu = await Menu.findById(req.params.id);
        res.json(menu);
    }catch (error){
        res.json({status:'Menu not found'})
    }
};

menuCtrl.createMenu = async (req,res) =>{
    try{
        const menu = new Menu(req.body);
        await menu.save();
        res.json({status: 'Menu saved'});
    }catch (error){
        res.json({status:'Failed to create menu'})
    }
};

menuCtrl.editMenu = async (req,res) => {
    try{
        const { id } = req.params;
        const menu = {
            product: req.body.product
        };
        await Menu.findByIdAndUpdate(id, {$set:menu}, {new: true});
        res.json({status:'Menu updated'})
    }catch (error){
        res.json({status:'Failed to edit menu'})
    }
};

menuCtrl.deleteMenu = async (req,res) => {
    try{
        await Menu.findByIdAndDelete(req.params.id);
        res.json({status: 'Menu deleted'})
    }catch(error){
        res.json({status:'Menu not exits'})
    }
};
module.exports = menuCtrl;