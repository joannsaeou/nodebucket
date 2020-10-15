/*   
<!-- 
* Title: item.js
* Author: Professor Krasso
* Date: 29 September 2020
* Modified: Joann Saeou
* Description: item  schema model export  file    */





// this is the item schema  file 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;



/**
 * ==============================================================================
 * Item Schema 
 * 
 * ==============================================================================
**/
let itemSchema = new Schema({
    text: {type: String}
  });

// schema to use for item model 
module.exports = itemSchema;