/* <!-- * Title:task.service.ts
// * Author: Professor Krasso
// * Date: 08 October 2020
// * Modified: Joann Saeou
// * Description:this is a service file for tasks ts
//                   this file will invoke all API
 --> */






import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../shared/item.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {



  constructor(private http: HttpClient) {
    }


/*
 * ==============================================================================
 *  API : findAllTask (here)
 *    this became http://localhost:3000/api/1007/tasks
 * ==============================================================================
*/

  findAllTasks(empId: string): Observable<any>  {
    return this.http.get('/api/employees/' + empId + '/tasks');

  }


/*
 * ==============================================================================
 *  API : updateTask
 *
 * ==============================================================================
*/

updateTask(empId: string, todo: Item[], done: Item[]): Observable<any> {
  return this.http.put('/api/employees/tasks' + empId + '/tasks', {
    todo,
    done
  });
}


  /*
 * ==============================================================================
 *  API : CreateTask
 *
 * ==============================================================================
*/

  createTask(empId: string, task: string): Observable<any> {
    return this.http.post('/api/employees/' + empId + '/tasks', {    // this is a {} body that will pass over
      text: task
    });
  }


  /*
 * ==============================================================================
 *  API : deleteTask
 *
 * ==============================================================================
*/

  deleteTask(empId: string, taskId: string): Observable<any> {
    return this.http.delete('/api/employees/' + empId + '/tasks/' + taskId );
  }

}
