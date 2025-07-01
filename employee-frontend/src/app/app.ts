import { Component } from '@angular/core';
import { EmployeeFormComponent } from './components/employee-form/employee.form';
import { EmployeeListComponent } from './components/employee-list/employee.list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmployeeFormComponent, EmployeeListComponent],
  template: `
    <h1>Employee Management</h1>
    <app-employee-form></app-employee-form>
    <app-employee-list></app-employee-list>
  `
})
export class AppComponent {}
