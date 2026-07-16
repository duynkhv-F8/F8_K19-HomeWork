import { Employee } from "../entities/Employee.js";
import uuid from "../utils/uuid.js";

export class EmployeeService {
    private employees: Employee[] = [];

    create(employee: Omit<Employee, "id" | "receiveNoti">): Employee {
        const newEmployee = new Employee(
            uuid(),
            employee.name
        );

        this.employees.push(newEmployee);

        return newEmployee;
    }

    findById(id: string): Employee | null {
        const employee = this.employees.find(
            (employee) => employee.id === id
        );

        return employee ?? null;
    }

    updateById(
        id: string,
        data: Partial<Omit<Employee, "id" | "receiveNoti">>
    ): Employee | null {
        const employee = this.findById(id);

        if (!employee) {
            return null;
        }

        Object.assign(employee, data);

        return employee;
    }
}