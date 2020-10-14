/*   
<!-- 
* Title: employee-api.js
* Author: Professor Krasso
* Date: 29 September 2020
* Modified: Joann Saeou
* Description: this is the api routing for employee --> */










// this is the API routing file for employee.js  

const express = require('express');
const Employee = require('../models/employee');
const BaseResponse = require('../services/base-response');
const ErrorResponse = require('../services/error-response');




const router = express.Router();

/**
 * API: findEmployeeByID (this will returns a JSON object of employee)
 */
router.get('/:empId', async(req, res) => {

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
    * API: findAllTasks here 
    * (this will returns a list of JSON task objects)
    * */


    router.get('/:empId/tasks', async(req, res) => {
        try {
                  
            
            // this is a callback function 
            Employee.findOne({'empId': req.params.empId}, 'empId todo done' , function(err, employee) {  
                    if (err) {
                        console.log(err);

                            /** this is important to send a message response to the client  */
                        const mongodbErrorResponse = new ErrorResponse('internal server error', '500', err);

                        res.status(500).send(mongodbErrorResponse.toObject())

                    } else {
                        console.log(employee);

                             /** this is important to send a message response to the client  */
                        const employeeTasksResponse = new BaseResponse('200', 'Query successful', employee);




                        res.json(employeeTasksResponse.toObject());
                    }
            })

        } catch (e) {

            const errorCatchResponse = new ErrorResponse('500', 'Internal server error', e.message);
            
            res.status(500).send(errorCatchResponse.toObject());
           
           
        }
    } )  // tasks will be own separate file 
/*
    *
    * DeleteTask here 
    *
    * */


    router.delete('/:empId/tasks/:taskId', async(req, res) => {

        try {

            Employee.findOne({'empId': req.params.empId}, 'empId todo done', function(err, employee) {

                if (err)  {
                    console.log(err);

                    const deleteTaskMondoDbErrorResponse = new ErrorResponse('500', 'Internal server error', err);

                    res.status(500).send(deleteTaskMondoDbErrorResponse.toObject());
                } else {

                    console.log(employee);

                    const todoItem = employee.todo.find(item => item._id.toString() === req.params.taskId);
                    const doneItem = employee.done.find(item => item._id.toString() === req.params.taskId);


                    if (todoItem) {
                        employee.todo.id(todoItem._id)
                        employee.save(function(err, updateTodoItemEmployee) {
                            if (err) {
                                console.log(err);

                                const deleteTaskOnSaveMongoDbErrorResponse = new ErrorResponse('500', 'internal server error', err);

                                res.status(500).send(deleteTaskOnSaveMongoDbErrorResponse.toObject());
                            } else {
                                console.log(updateTodoItemEmployee);

                                const deleteTodoItemSuccessResponse = new BaseResponse('200', 'Removed item from the todo list', updateTodoItemEmployee);

                                res.json(deleteTodoItemSuccessResponse.toObject());
                            }
                        })


                    } else if (doneItem) {
                        employee.done.id(doneItem._id).remove();

                        employee.save(function(err, updatedDoneItemEmployee) {
                            if (err) {
                                console.log(err);

                                const deleteDoneItemSuccessResponse = new BaseResponse('200', 'Removed item from the done list', updatedDoneItemEmployee);

                                res.json(updatedDoneItemEmployee.toObject());
                            }
                        })

                    } else {
                        console.log('Invalid task ID');

                        const deleteTaskNotFoundResponse = new ErrorResponse('200', 'Unable to locate the requested task', null);

                        res.status(500).send(deleteTaskNotFoundResponse.toObject());
                    }
                }
            })

        } catch (e) {


            console.log(e);

            const deleteTaskCatchErrorResponse = new ErrorResponse('500', 'Internal server error', e.message);

            res.status(500).send(this.deleteTaskCatchErrorResponse.toObject());

        }
     })















     /*
    *
    * CreateTask here 
    * */



router.post('/:empId/tasks', async(req, res) => {

    try {
        Employee.findOne({'empId': req.params.empId}, 'empId todo done', function(err, employee) {

            if (err) {
                console.log(err);

                const CreateTaskCatchErrorResponse = new ErrorResponse('500', 'Internal server error', err);

                res.status(500).send(CreateTaskCatchErrorResponse.toObject());
             } else { 

                 console.log(employee);


                //this will create a new item object 
                 const item = {
                     text: req.body.text
                 };

                 // this will push the new item to the todo array
                 employee.todo.push(item);


                 employee.save(function(err, updatedEmployee ) {
                    if (err) {
                        console.log(err);

                        const CreateTaskOnSaveMongoDbErrorResponse = new ErrorResponse('500', 'Internal server error', err);

                        res.status(500).send(CreateTaskOnSaveMongoDbErrorResponse.toObject());

                    } else {

                        console.log(updatedEmployee);

                        const CreateTaskResponse = new BaseResponse('200', 'Successful entry', updatedEmployee);

                        res.json(CreateTaskResponse.toObject());
                    }

                     })

             }
        })

    } catch (e) {
        console.log(e);

        const createTaskCatchErrorResponse = new ErrorReponse('500', 'Internal Server Error', e.message);

        res.status(500).send(createTaskCatchErrorResponse.toObject());
    }
})













     /*
    *
    * updatedTask here 
    * */

    router.put('/:empId/tasks', async(req, res) => {
        try {

            Employee.findOne({'empId': req.params.empId}, 'empId todo done', function(err, employee) {
                
                if (err) {
                    console.log(err);

                    const updateTaskMongoDbErrorReponse = new ErrorResponse('500','Internal server error', err);

                    res.status(500).send(updateTaskMongoDbErrorReponse.toObject());

                } else {

                    console.log(employee);
                    // employee object will be updated
            
                   employee.set({
                     todo: req.body.todo,
                     done: req.body.done
                   });

                    employee.save(function(err, updateEmployee) {
                        if (err) {
                            
                            console.log(err);

                            const updateTaskOnSaveMongoDbErrorResponse = new ErrorResponse('500', 'internal server error', err);

                            res.status(500).send(updateTaskOnSaveMongoDbErrorResponse.toObject());
                        } else {
                            console.log(updatedEmployee);

                            const updateTaskOnSaveSuccessResponse = new BaseResponse('200', 'Update successful', updatedEmployee);

                            res.json(updateTaskOnSaveSuccessResponse.toObject());
                        }

                    })
                }
            })

        } catch (e) {
            console.log(e);

            const updateTaskCatchErrorResponse = new ErrorResponse('500', 'Internal server error', e.message);

            res.status(500).send(updateTaskCatchErrorResponse.toObject());
        }
    })
















module.exports = router;