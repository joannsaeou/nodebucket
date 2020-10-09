/* <!-- * Title: task.service.spec.ts
// * Author: Professor Krasso
// * Date: 08 October 2020
// * Modified: Joann Saeou
// * Description:task service spec ts  --> */




import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';

describe('TaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskService = TestBed.get(TaskService);
    expect(service).toBeTruthy();
  });
});
