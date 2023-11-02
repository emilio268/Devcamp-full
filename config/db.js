const mongoose = require('mongoose')

const conectarBD = async() =>{
    const conn = await  mongoose.connect('mongodb://127.0.0.1:27017/devcamp-2687340')

    console.log("se conecto bien".bgGreen.blue)
}

module.exports = conectarBD