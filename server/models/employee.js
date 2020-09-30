/*   
<!-- 
* Title: employee.js
* Author: Professor Krasso
* Date: 29 September 2020
* Modified: Joann Saeou
* Description: employee schema file --> */



const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Item = require('./item');  // a file item.js from the models folders  


/*
* employee schema , from SPRINT1
*/
const employeeSchema = new Schema({
    
    empId: {type: String, unique: true, dropDubs: true},
    firstName: {type: String},
    lastName: {type: String},
    todo: [Item],   /* an array of item */
    done: [Item]    /* an array of item */   
 

}, { collection: 'employee' });

module.exports = mongoose.model('Employee', employeeSchema);