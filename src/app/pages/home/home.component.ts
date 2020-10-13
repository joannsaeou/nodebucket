
// <!-- * Title: home.component.ts
// * Author: Professor Krasso
// * Date: 18 September 2020
// * Modified: Joann Saeou
// * Description: Home component ts file  -->

import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TaskService } from 'src/app/shared/task.service';
// import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Employee } from '../../shared/employee.interface';
import { Item } from '../../shared/item.interface';
import { MatDialog } from '@angular/material/dialog';
import { CreateTaskDialogComponent } from 'src/app/shared/create-task-dialog/create-task-dialog.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //  tasks: any

  todo: Array<Item>;
  done: Array<Item>;
  employee: Employee;  // this will remove the red squiggly line on line 41

  empId: string;


  constructor(private taskService: TaskService, private cookieService: CookieService, private dialog: MatDialog) {


    this.empId = this.cookieService.get('session_user'); // this will get the active session user

    this.taskService.findAllTasks(this.empId).subscribe(res => {   // will run the nth, error, complete
      console.log(`--server response from findAllTasks--`);
      console.log(res);


      this.employee = res.data;
      console.log(`--Employee object--`);
      console.log(this.employee);

    }, err => {
      console.log(err);   // catch the error here

    }, () => {
      this.todo = this.employee.todo;
      this.done = this.employee.done;

      console.log(`This is the complete function`);
      console.log(this.todo);
      console.log(this.done);
    });
  }



  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<any[]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

      console.log(`Reordered the existing list of task items`);

      this.updateTaskList(this.empId, this.todo, this.done);

    } else {
      transferArrayItem(event.previousContainer.data,
      event.container.data, event.previousIndex, event.currentIndex);


      console.log(`Moved task item to the container`);

      this.updateTaskList(this.empId, this.todo, this.done);

    }
  }


  private updateTaskList(empId: string, todo: Item[], done: Item[]): void {
    this.taskService.updateTask(empId, todo, done).subscribe(res => {
      this.employee = res.data;
    }, err => {
      console.log(err);
    }, () => {
      this.todo = this.employee.todo;
      this.done = this.employee.done;
    });

  }


  // this is the code that will open up the dialog
  openCreateTaskDialog() {

    const dialogRef = this.dialog.open(CreateTaskDialogComponent, {
      disableClose: true
    });


    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.taskService.createTask(this.empId, data.text).subscribe(res => {
            this.employee = res.data;
        } , err => {
          console.log(err);
        },  () => {
          this.todo = this.employee.todo;
          this.done = this.employee.done;

        });
      }
    });
  }

  // to delete certain Task

  deleteTask(taskId: string) {
    if (taskId) {
      console.log(`Task Item: ${taskId} was delete`); // must use backtick to make taskID delete work

      this.taskService.deleteTask(this.empId, taskId).subscribe(res => {
        this.employee = res.data;
      }, err => {
        console.log(err);
      }, () => {
        this.todo = this.employee.todo;
        this.done = this.employee.done;

      });
    }

  }

  }




