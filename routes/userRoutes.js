const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');

//registrar usuarios
router.post('/register', async function (req, res){
    try{
        const user = await userModel.create(req.body)
        return res.status(201).json({
            sucess: true,
            data: user
        })
    }catch(error){
        return res.status(500).json({
            sucess: false,
            msg : error.message
        })
    }
})


router.post('/login', async function (req, res) {
    try{
        const {email , password} = req.body
        const user = await userModel.findOne({ email })
        console.log(user)

        if(!user){
            res.status(401).json({
                sucess: false,
                msg: 'usuario no encontrado'
            })
        }else{
            const isMatch = await user.compararPassword(password)
            if(!isMatch){
                return res.status(401).json({
                    sucess: false,
                    msg: 'Clave invalida'
                })
            }else{
                return res.status(200).json({
                    sucess: true,
                    msg: 'Usuario logueado exitosamente'
                })
            }
        }

    }catch(error){
        res.status(500).json({
            sucess: false,
            msg: error.message
        })
    }
})

module.exports = router