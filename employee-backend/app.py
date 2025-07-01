from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import mysql.connector

app = FastAPI()

conn = mysql.connector.connect(
    host="localhost",
    user="root",
    password="1234",  
    database="employee_db"
)
cursor = conn.cursor()

class Employee(BaseModel):
    name: str
    email: str
    department: str

@app.get("/employees")
def get_employees():
    cursor.execute("SELECT * FROM employees")
    rows = cursor.fetchall()
    return [{"id": r[0], "name": r[1], "email": r[2], "department": r[3]} for r in rows]

@app.get("/employees/{id}")
def get_employee(id: int):
    cursor.execute("SELECT * FROM employees WHERE id = %s", (id,))
    row = cursor.fetchone()
    if not row:
        raise HTTPException(status_code=404, detail="Employee not found")
    return {"id": row[0], "name": row[1], "email": row[2], "department": row[3]}

@app.post("/employees")
def create_employee(emp: Employee):
    cursor.execute("INSERT INTO employees (name, email, department) VALUES (%s, %s, %s)",
                   (emp.name, emp.email, emp.department))
    conn.commit()
    return {"message": "Employee created"}

@app.put("/employees/{id}")
def update_employee(id: int, emp: Employee):
    cursor.execute("UPDATE employees SET name=%s, email=%s, department=%s WHERE id=%s",
                   (emp.name, emp.email, emp.department, id))
    conn.commit()
    return {"message": "Employee updated"}

@app.delete("/employees/{id}")
def delete_employee(id: int):
    cursor.execute("DELETE FROM employees WHERE id=%s", (id,))
    conn.commit()
    return {"message": "Employee deleted"}
