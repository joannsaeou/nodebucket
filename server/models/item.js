/*   
<!-- 
* Title: item.js
* Author: Professor Krasso
* Date: 29 September 2020
* Modified: Joann Saeou
* Description: item  schema model export  file    */





// this is the item file 

const mongoose = required('mongoose');
const Schema = mongoose.Schema;


let itemSchema = new Schema({
    text: { type: String }
}); 

module.exports = itemSchema;