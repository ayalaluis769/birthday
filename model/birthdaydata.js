const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BirthdaySchema = new Schema({
    id:{type:Number,required:true},
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    birthday:{type:Date,required:true},
    gender:{type:String,required:true}
})

module.exports = mongoose.model('Birthday',BirthdaySchema)