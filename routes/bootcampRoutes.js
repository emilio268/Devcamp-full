const express = require('express')
const bootcampModel = require('../models/bootcampModel')
const { default: mongoose } = require('mongoose')
const router = express.Router()

//definir rutas de bootcamps
//con el ruteador

//Traer todos los bootcamps
router.get('/', async (req, res) => {
    //Seleccionar todos los bootcamps
    //en la colección

    try{
        const bootcamps = 
            await bootcampModel.find()
        if(bootcamps.lenght === 0){
            res.
            status(400). 
            json({
                sucess: false,
                msg: "no hay bootcamps en la collection"
            })
        }else{
            res.
            status(200). 
            json({
                sucess: true,
                data: bootcamps
            })
        }
    }catch(error){
        res.
            status(error.status). 
            json({
                sucess: false,
                msg: error.message
            })
    }

})

//Seleccionar bootcamp por id
router.get('/:id', async (req, res) => {

    try{
        bootcampid = req.params.id

        if(!mongoose.Types.ObjectId.isValid(bootcampid)){
            res.status(400).json({
                sucess: false,
                msg: "el id no es valido"
            })
        }else{
            selected_Bootcamp = await bootcampModel.
                            findById(bootcampid)

        if(selected_Bootcamp){
            //se encontro el bootcamp
            res.status(200).json({
                sucess: true,
                results: selected_Bootcamp
            })
        }else{
            //No se haya encontrado
            res.status(400).json({
                sucess: false,
                msg: `No se encontro el bootcamp ${bootcampid}`
            })
        }
        }
        

    }catch(error){
        res.status(500).json({
            sucess:false,
            msg: error.message
        })
    }
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