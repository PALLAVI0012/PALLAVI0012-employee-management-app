Employee Management Angular App
Project Description
This is a simple Angular 20 application that implements CRUD (Create, Read, Update, Delete) operations for managing employees.
It connects to a FastAPI backend at http://127.0.0.1:8000/employees.

The app includes:

A form to add employees

A list to view and delete employees




Setup Instructions
1. Install dependencies:

nginx
Copy
Edit
npm install
2️. Run the app:

ng serve
3.Open in browser:


http://localhost:4200
Problem Facing
Service Injection Error:
The application shows build errors because EmployeeService is either missing or not correctly imported into the components:


Cannot find module 'src/app/services/employee.service'
No suitable injection token for parameter 'empService'