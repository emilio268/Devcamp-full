const mongoose = require('mongoose')

//definir el schema
//plano general de todo bootcamp


const bootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Nombre requerido"],
        unique: [true, "Nombre repetido"] 
    },
    phone: {
        type: Number,
        required: [true, "Telefono requerido"],
        maxlenght: [10, "Telefono muy largo"]
    },
    address: {
        type: String,
        required: [true, "Dirección requerido"],
        maxlenght: [50, "Dirección muy larga"],
        minlenght: [10, "Dirección muy corta"]
    },
    topics: {
        type: [String],
        enum: ["AI" ,
                "Backend" , 
                "Frontend" ,
                "Devops"]

    },
    createdAt: Date
    
})

//exportar el modelo
const bootcampModel = mongoose
                        .model("Bootcamp" , bootcampSchema)

module.exports = bootcampModel