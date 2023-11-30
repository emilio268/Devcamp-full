const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const { response } = require('express')

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String,
})

UserSchema.pre('save', async function(){
    const sal = await bcryptjs.genSalt(10)
    this.password = await bcryptjs.hash(this.password, sal)
})

UserSchema.methods.compararPassword = async function(password){
    return await bcryptjs.compare(password, this.password)
}

module.exports = mongoose.model('User', UserSchema)