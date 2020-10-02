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
app.use(express.static(path.join(__dirname, '../dist/nodebucket')));
app.use('/', express.static(path.join(__dirname, '../dist/nodebucket')));

/**
 * Variables
 */

const employee = require('./models/employee');

const port = 3000; // server port

// TODO: This line will need to be replaced with your actual database connection string

const conn = 'mongodb+srv://nodebucket450:cPCi8i5HNULUPikc@buwebdev-cluster-1.2eedp.mongodb.net/nodebucket?retryWrites=true&w=majority';

/**
 * Database connection
 */
mongoose.connect(conn, {
  promiseLibrary: require('bluebird'),
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(() => {
  console.debug(`Connection to the database instance was successful`);
}).catch(err => {
  console.log(`MongoDB Error: ${err.message}`)
}); // end mongoose connection






/**
 * API(s)
 */


 app.use('/api/employee', EmployeeApi);   // this is the URL  localhost:3000/api/employees   

/**
 * Create and start server
 */
http.createServer(app).listen(port, function() {
  console.log(`Application started and listening on port: ${port}`)
});  // end http create server function
