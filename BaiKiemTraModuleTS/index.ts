import { CustomerService } from "./services/CustomerService.js";
import { EmployeeService } from "./services/EmployeeService.js";
import { ProjectService } from "./services/ProjectService.js";

// Khởi tạo service
const customerService = new CustomerService();
const employeeService = new EmployeeService();
const projectService = new ProjectService(employeeService);

console.log("========== TEST CASE 1 ==========");
// Tạo Customer
const customer = customerService.create({
    name: "Công ty ABC",
    tax: "123456789",
    address: "Hà Nội",
});

console.log(customer);

console.log("\n========== TEST CASE 2 ==========");
// Update Customer
const updatedCustomer = customerService.updateById(customer.id, {
    address: "Hồ Chí Minh",
});

console.log(updatedCustomer);

console.log("\n========== TEST CASE 3 ==========");
// Tạo Employee

const employee1 = employeeService.create({
    name: "Nguyễn Văn A",
});

const employee2 = employeeService.create({
    name: "Trần Văn B",
});

console.log(employee1);
console.log(employee2);

console.log(
    "ID khác nhau:",
    employee1.id !== employee2.id
);

console.log("\n========== TEST CASE 4 ==========");
// Find Employee

console.log(employeeService.findById(employee1.id));

console.log(employeeService.findById("abc"));

console.log("\n========== TEST CASE 5 ==========");
// Tạo Project

const project = projectService.create({
    customerId: customer.id,
    employeeId: employee1.id,
});

console.log(project);

console.log("\n========== TEST CASE 6 ==========");
// Đổi Employee phụ trách

const updatedProject = projectService.updateById(project.id, {
    employeeId: employee2.id,
});

console.log(updatedProject);

console.log("\n========== TEST CASE 7 ==========");
// Chỉ đổi Customer

const updatedProject2 = projectService.updateById(project.id, {
    customerId: "CUSTOMER_MOI",
});

console.log(updatedProject2);

console.log("\n========== TEST CASE 8 ==========");
// Update dữ liệu không tồn tại

console.log(
    customerService.updateById("abc", {
        address: "XYZ",
    })
);

console.log(
    employeeService.updateById("abc", {
        name: "Không tồn tại",
    })
);

console.log(
    projectService.updateById("abc", {
        customerId: "123",
    })
);

console.log("\n========== TEST CASE 9 ==========");
// Employee không tồn tại

const project2 = projectService.create({
    customerId: customer.id,
    employeeId: "employee-khong-ton-tai",
});

console.log(project2);
