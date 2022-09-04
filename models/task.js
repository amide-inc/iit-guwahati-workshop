const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title : {type:String, required: true},
    description: {type:String},
    createdAt: {type:Number, required: true},
    updatedAt: {type:Number, required: true},
});

module.exports = mongoose.model('task', taskSchema);