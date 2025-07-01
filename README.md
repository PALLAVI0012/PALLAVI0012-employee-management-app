Employee Management Angular App
Project Description
This is a simple Angular 20 application that implements CRUD (Create, Read, Update, Delete) operations for managing employees.
It connects to a FastAPI backend at http://127.0.0.1:8000/employees.

The app includes:

A form to add employees

A list to view and delete employees

Problems Facing


Component Import Errors:

Although EmployeeFormComponent and EmployeeListComponent are correctly marked as standalone: true, Angular still shows:

 Component imports must be standalone components, directives, pipes, or must be NgModules.

 
Service Injection Error:

Errors appear because EmployeeService is either missing or not correctly imported in components:


Cannot find module 'src/app/services/employee.service'

No suitable injection token for parameter 'empService'
