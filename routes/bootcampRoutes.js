const express = require('express')
const bootcampModel = require('../models/bootcampModel')
const router = express.Router()

//definir rutas de bootcamps
//con el ruteador

//Traer todos los bootcamps
router.get('/', async (req, res) => {
    //Seleccionar todos los bootcamps
    //en la colección

    const bootcamps = await bootcampModel.find()

    res.json({
        sucess: true,
        result: bootcamps
    })
})

//Seleccionar bootcamp por id
router.get('/:id', async (req, res) => {
    bootcampid = req.params.id

    selected_Bootcamp = await bootcampModel.findById(bootcampid)

    res.json({
        sucess: true,
        results: selected_Bootcamp
    })
})

//Crear bootcamp
router.post('/', async (req, res) => {
    const newBootcamp = await bootcampModel.create(req.body)

    res.json({
        sucess:true,
        results: newBootcamp
    })
})

module.exports = router