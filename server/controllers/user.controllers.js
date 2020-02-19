const User = require('../models/user');
const bcrypt = require('bcrypt-nodejs');
const jwtServices = require('../services/jwt.services');

const userCtrl = {};

userCtrl.saveUser = (req,res) =>{
    const user = new User();
    var params = req.body;

    user.name = params.name;
    user.surname = params.surname;
    user.email = params.email;
    user.role = 'ROLE_USER';
    user.image = 'null';

    if(params.password){
        //Crypt and save datas
        bcrypt.hash(params.password,null,null,function(err,hash){
            user.password = hash;
            if(user.name != null && user.surname != null && user.email != null){
                user.save()
                .then(user =>{
                    res.status(200).send({user:user});
                })
                .catch(err =>{
                    res.status(500).send({message:err});
                });
            }else{
                res.status(200).send({message:'Fill out form'});
            }
        });
    }else{
        res.status(200).send({message:'Enter the pass'});
    }
}
userCtrl.loginUser = async (req,res) =>{
    var params = req.body;

    var email = params.email;
    var password = params.password;
    User.findOne({email: email}, (err,user)=>{
        if(err){
            res.status(500).send({message: 'Error to server'});
        }else{
            if(!user){
                res.status(404).send({message: 'User not found'});
            }else{
                bcrypt.compare(password,user.password,(err,check)=>{
                    if(check){
                        if(params.gethash){
                            //Here return user token crypt
                            res.status(200).send({token: jwtServices.createToken(user)})
                        }else{
                            res.status(200).send({user});
                        }
                    }else{
                        res.status(404).send({message: 'User not login'});
                    }
                })
            }
        }
    })
}

userCtrl.getUsers =  async (req,res) =>{
    try{
        const users = await User.find();
        res.json(users);
    }catch(err){
        res.json({status:'Teachers not found'})
    }

}
module.exports = userCtrl;