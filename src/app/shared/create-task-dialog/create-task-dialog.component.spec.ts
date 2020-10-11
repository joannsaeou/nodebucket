// <!-- * Title: app.routing.ts
// * Author: Professor Krasso
// * Date: 19 September 2020
// * Modified: Joann Saeou
// * Description: app routing ts  -->


import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTaskDialogComponent } from './create-task-dialog.component';

describe('CreateTaskDialogComponent', () => {
  let component: CreateTaskDialogComponent;
  let fixture: ComponentFixture<CreateTaskDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTaskDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTaskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
