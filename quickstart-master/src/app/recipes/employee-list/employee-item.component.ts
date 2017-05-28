import { Component,Input } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'su-emp-item',
  templateUrl: './employee-item.component.html',
})
export class EmployeeItemComponent {
    @Input() employee: Employee;
    employeeId: number;

}
