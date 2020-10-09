
// this file will invoke all API

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './item.interface';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

 

  constructor(private http: HttpClient) {
   }

  /**findAllTask (here)
   * this became http://localhost:3000/api/1007/tasks
   */
  findAllTasks(empId: string): Observable<any>  {
    // tslint:disable-next-line: semicolon
    return this.http.get('/api/employee/' + empId + '/tasks')

  }



  // updateTask (here)

updateTask(empId: string, todo: Item[], done: Item[]): Observable<any> {
  return this.http.put('/api/employee/tasks' + empId + '/tasks', {
    todo,
    done
  })
}


  // createTask (here)


  // deleteTask (here)

}