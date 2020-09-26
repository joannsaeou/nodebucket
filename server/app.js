/**
 * Require statements
 */
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

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

const conn = 'mongodb+srv://nodebucket450:q1770FqBF97M7UrV@buwebdev-cluster-1.2eedp.mongodb.net/nodebucket?retryWrites=true&w=majority';

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




// mongoose.connect(
//   'mongodb+srv://nodebucket_employee:5ky8ZoSc7meskZP5@buwebdev-cluster-1.2eedp.mongodb.net/nodebucket?retryWrites=true&w=majority',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true,
//     user: 'nodebucket_employee', // IMPORTANT TO HAVE IT HERE AND NOT IN CONNECTION STRING
//     pass: '5ky8ZoSc7meskZP5', // IMPORTANT TO HAVE IT HERE AND NOT IN CONNECTION STRING
//     dbName: 'nodebucket', // IMPORTANT TO HAVE IT HERE AND NOT IN CONNECTION STRING
//   },
//   err => { throw err; },
// );

/**
 * API(s)
 */


 app.get('/api/employee/:empId', async(req, res) => {

 try {
   /* use the mongoose employee model to query mongodb atlas by employee Id */
   employee.findOne({'empId': req.params.empId}, function(err, employee){

    /* if there is a db level error , handle by returning a server 500 error */
    if(err) {
      console.log(err);
      res.status(500).send({
        'message': 'Internal server error'
      })

    } else {

      /* if there is no db level errors, return the employee object */
      console.log(employee);
      res.json(employee);
    }
   })

 } catch (e) {

   /* catch any potential errors that wasn't prepare for */
   console.log(e);
   res.status(500).send({
    'message': 'Internal server error!'
 })
}
 },



/**
 * Create and start server
 */
http.createServer(app).listen(port, function() {
  console.log(`Application started and listening on port: ${port}`)
}));  // end http create server function
