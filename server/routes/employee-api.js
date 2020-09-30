/*   
<!-- 
* Title: employee-api.js
* Author: Professor Krasso
* Date: 29 September 2020
* Modified: Joann Saeou
* Description: this is the api routing for employee --> */










// this is the API routing file for employee  

const express = require('express');
const Employee = require('../models/employee');

const router = express.Router();

/**
 * findEmployeeByID 
 */
router.get('/api/employee/:empId', async(req, res) => {

    try {
    /*
      * use the mongoose employee model to query mongodb atlas by employee Id
        */
    Employee.findOne({'empId': req.params.empId}, function(err, employee){

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

    })


/**
 * typescript here 
 */

class EmployeeResponse {
    constructor(message, statusCode, errorMessage, data)    {
        this.message = message;
        this.statusCode = statusCode;
        this.errorMessage = errorMessage;
        this.data = data;

}
}



    /*
    *
    * findAllTasks here 
    * */


    router.get('/:empId/tasks', async(req, res) => {
        try {
                    // this is a callback function 
            Employee.findOne({'empId': req.params.empId}, 'empId todo done' , function(err, employee) {  
                    if (err) {
                        console.log(err);
                        const mongodbError = new EmployeeResponse('internal server error', '500', err, null);
                        res.status(500).send({
                            data: mongodbError
                        })
                    } else {
                        console.log(employee);
                             /** this is important to send a message response to the client  */
                        const successResponse = new EmployeeResponse('Your query worked', res.status.null. employee);
                        res.json(successResponse);
                    }
            })

        } catch (e) {
            res.status(500).send({
                'message':  'Internal server error!'
            })
        }
    } )  // tasks will be own separate file 


    


module.exports = router;