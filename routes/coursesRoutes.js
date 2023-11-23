const express = require('express')
const coursesModel = require('../models/coursesModel')
const { default: mongoose } = require('mongoose')
const router = express.Router()

//definir rutas de courses
//con el ruteador

//Traer todos los courses
router.get('/', async (req, res) => {
    //Seleccionar todos los courses
    //en la colección

    try{
        const courses = 
            await coursesModel.find()
        if(courses.lenght === 0){
            res.
            status(400). 
            json({
                sucess: false,
                msg: "no hay courses en la collection"
            })
        }else{
            res.
            status(200). 
            json({
                sucess: true,
                data: courses
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
        coursesid = req.params.id

        if(!mongoose.Types.ObjectId.isValid(coursesid)){
            res.status(400).json({
                sucess: false,
                msg: "el id no es valido"
            })
        }else{
            selected_Courses = await coursesModel.
                            findById(coursesid)

        if(selected_Courses){
            //se encontro el bootcamp
            res.status(200).json({
                sucess: true,
                results: selected_Courses
            })
        }else{
            //No se haya encontrado
            res.status(400).json({
                sucess: false,
                msg: `No se encontro el bootcamp ${coursesid}`
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

router.post('/', async (req, res) => {

    try {

        if (!req.body.title) {
            return res.status(400).json({
                success: false,
                msg: "El campo 'name' es obligatorio para crear un curso."
            });
        }
        
        const newCourses = await coursesModel.create(req.body)

    res.status(201).json({
        sucess:true,
        results: newCourses                                                                                                          
    })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            msg: error.message
        })
    }
    
})

//actualizar bootcamp PUT

router.put('/:id' , async(req, res) =>{

    try{
        coursesid = req.params.id

        if(!mongoose.Types.ObjectId.isValid(coursesid)){
            res.status(400).json({
                sucess: false,
                msg: "el id no es valido"
            })
        }else{
            selected_Courses = await coursesModel.
                            findByIdAndUpdate(coursesid, req.body, {new: true})

        if(selected_Courses){
            //se encontro el bootcamp
            res.status(200).json({
                sucess: true,
                results: selected_Courses
            })
        }else{
            //No se haya encontrado
            res.status(400).json({
                sucess: false,
                msg: `No se encontro el bootcamp ${coursesid}`
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

router.delete("/:id" , async(req , res) =>{

    try{
        coursesid = req.params.id

        if(!mongoose.Types.ObjectId.isValid(coursesid)){
            res.status(400).json({
                sucess: false,
                msg: "el id no es valido"
            })
        }else{
            selected_Courses = await coursesModel.
                            findByIdAndDelete(coursesid, req.body, {new: true})

        if(selected_Courses){
            //se encontro el bootcamp
            res.status(200).json({
                sucess: true,
                results: selected_Courses
            })
        }else{
            //No se haya encontrado
            res.status(400).json({
                sucess: false,
                msg: `No se encontro el bootcamp ${coursesid}`
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



module.exports = router