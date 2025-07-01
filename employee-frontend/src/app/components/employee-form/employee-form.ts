import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Add Employee</h2>
    <form (ngSubmit)="add()">
      <input [(ngModel)]="employee.name" name="name" placeholder="Name" required>
      <input [(ngModel)]="employee.email" name="email" placeholder="Email" required>
      <input [(ngModel)]="employee.department" name="department" placeholder="Department" required>
      <button type="submit">Add</button>
    </form>
  `
})
export class EmployeeFormComponent {
  employee = { name: '', email: '', department: '' };

  constructor(private empService: EmployeeService) {}

  add() {
    this.empService.addEmployee(this.employee).subscribe(() => {
      alert('Employee added');
      this.employee = { name: '', email: '', department: '' };
    });
  }
}
