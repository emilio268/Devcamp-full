const mongoose = require('mongoose')

//definir el esquema

const coursesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Titulo es requerido"],
        maxlength: [30, "Titulo muy largo"],
        minlength: [10, "Titulo muy corto"]
    },
    descripcion:{
        type: String,
        required : [true, "descripcion requerida"],
        minlength: [10, "Descripción muy larga"],
    } ,
    weeks: {
        type: Number,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} no es un número entero.'
        },
        required: [true, 'Semanas requeridas.'],
        max: [9, 'Máximo de semanas superadas.']
    },
    enroll_cost:{
        type: Number,
        required : [true, "Costo requerido"]
    } ,
    minium_skill:{
        type: [String],
        enum: [
                "Beginner",
                "Intermediate",
                "Advanced",
                "Expert"
            ]
    }

})

const coursesModel = mongoose.model("courses", coursesSchema)

module.exports = coursesModel