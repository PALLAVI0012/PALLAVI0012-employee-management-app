import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Employees</h2>
    <ul>
      <li *ngFor="let emp of employees">
        {{ emp.name }} - {{ emp.email }} - {{ emp.department }}
        <button (click)="delete(emp.id)">Delete</button>
      </li>
    </ul>
  `
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = [];

  constructor(private empService: EmployeeService) {}

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.empService.getEmployees().subscribe((data: any) => this.employees = data);
  }

  delete(id: number) {
    this.empService.deleteEmployee(id).subscribe(() => this.loadEmployees());
  }
}
