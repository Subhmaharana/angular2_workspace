import { Component } from '@angular/core';
import { Employee } from '../employee'

@Component({
  selector: 'su-employee-list',
  templateUrl: './employee-list.component.html',
})
export class EmployeeListComponent {
      employees : Employee[] = [];
      employee = new Employee('dummy','dummuy','ghjkl');
      

}
