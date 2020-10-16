/* <!-- * Title: employee.interface.ts
// * Author: Professor Krasso
// * Date: 08 October 2020
// * Modified: Joann Saeou
// * Description: interface file for employee  --> */




import { Item } from './item.interface';

export interface Employee {
    empId: string;
    todo: Item[];
    done: Item[];


// tslint:disable-next-line: eofline
}