/*   
<!-- 
* Title: app.s
* Author: Professor Krasso
* Date: 29 September 2020
* Modified: Joann Saeou
* Description: this is the app.js where mongodb connections exists here --> */



/**
 * Require statements
 */
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');


const mongoose = require('mongoose');
const Employee = require('./models/employee');  // this will get  the employee model from the models directory 
const EmployeeApi = require('./routes/employee-api'); // this will import the employee API and sets up the routes for the employee objects 



/**
 * App configurations
 */
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': true}));
app.use(morgan('dev'));
app.use(cors());
app.use(express.static(path.join(__dirname, '../dist/nodebucket')));
app.use('/', express.static(path.join(__dirname, '../dist/nodebucket')));

/**
 * Variables
 */



const PORT = process.env.PORT || '3000'; // server port





// TODO: This line will need to be replaced with your actual database connection string
// 

const conn = 'mongodb+srv://nodebucket450:EQnUZjpVwZV2zitj@buwebdev-cluster-1.2eedp.mongodb.net/nodebucket?retryWrites=true&w=majority';

/**
 * ==============================================================================
 * Database connection
 * 
 * ==============================================================================
**/
mongoose.connect(conn, {
  promiseLibrary: require('bluebird'),
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
}).then(() => {
  console.debug(`Connection to the database instance was successful`);
}).catch(err => {
  console.log(`MongoDB Error: ${err.message}`)
}); 
// end mongoose connection








/**
 * ==============================================================================
 * API goes here 
 * 
 * ==============================================================================
**/


 app.use('/api/employees', EmployeeApi);   // this is the URL  localhost:3000/api/employees   


app.set("port", PORT);

/**
 * ==============================================================================
 * Create and Start server 
 * 
 * ==============================================================================
**/
http.createServer(app).listen(PORT, function() {
  console.log(`Application started and listening on port: ${PORT}`)
});  // end http create server function
