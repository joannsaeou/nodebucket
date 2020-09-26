const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    
    empId: {type: String, unique: true, dropDubs: true},
    firstName: {type: String},
    lastName: {type: String},
 

}, { collection: 'employee' });

module.exports = mongoose.model('employee', employeeSchema);