const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const crimeSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    dateandtime:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
},{timestamps:true});

const Crime = mongoose.model('Crime',crimeSchema);

module.exports = Crime;