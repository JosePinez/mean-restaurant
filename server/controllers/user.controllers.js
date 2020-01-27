const User = require('../models/user');

const userCtrl = {};

userCtrl.getUsers = async (req,res) =>{
    const users = await User.find();
    res.json(users);
};

userCtrl.getUser= async (req,res) =>{
    try{
        const user = await user.findById(req.params.id);
        res.json(user);
    }catch (error){
        res.json({status:'User not found'})
    }
};

userCtrl.createUser = async (req,res) =>{
    try{
        const user = new User({
            name: req.body.name,
            dni: req.body.dni,
            email: req.body.email,
            tel: req.body.tel,
            admin: req.body.admin
        });
        await user.save();
        res.json({status: 'User saved'});
    }catch (error){
        res.json({status:'Fail to create user'});
    }
};

userCtrl.editUser = async (req,res) => {
    try{
        const { id } = req.params;
        const user = {
            name: req.body.name,
            dni: req.body.dni,
            email: req.body.email,
            tel: req.body.tel,
            admin: req.body.admin
        };
        await User.findByIdAndUpdate(id, {$set:menu}, {new: true});
        res.json({status:'User updated'})
    }catch (error){
        res.json({status:'Failed to edit user'})
    }
};

userCtrl.deleteUser = async (req,res) => {
    try{
        await User.findByIdAndDelete(req.params.id);
        res.json({status: 'User deleted'})
    }catch(error){
        res.json({status:'User not exits'})
    }
};
module.exports = userCtrl;