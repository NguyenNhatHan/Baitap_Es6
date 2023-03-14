import getEle from "./helper.js";
import { Person, Student, Employee, Customer } from './person.js'

// // helper
// function getEle(selector) {
//     return document.querySelector(selector);
// }

//
let ListPerson = [];

const getElee = (id) => document.getElementById(id);
getElee("categoryTable").onchange = () => {
    const value = getElee("categoryTable").value;
    switch (value) {
        case "hs": {
            getElee("modalSinhVien").style.display = "block";
            getElee("modalEmployee").style.display = "none";
            getElee("modalCustomer").style.display = "none";
            getElee("btnThem").style.display = "block";
            getElee("tableHs").style.display = "block";
            getElee("tableNv").style.display = "none";
            getElee("tableKh").style.display = "none";

            break;
        }
        case "nv": {
            getElee("modalSinhVien").style.display = "none";
            getElee("modalEmployee").style.display = "block";
            getElee("modalCustomer").style.display = "none";
            getElee("btnThem").style.display = "block";
            getElee("tableHs").style.display = "none";
            getElee("tableNv").style.display = "block";
            getElee("tableKh").style.display = "none";
            break;
        }
        case "kh": {
            getElee("modalSinhVien").style.display = "none";
            getElee("modalEmployee").style.display = "none";
            getElee("modalCustomer").style.display = "block";
            getElee("btnThem").style.display = "block";
            getElee("tableHs").style.display = "none";
            getElee("tableNv").style.display = "none";
            getElee("tableKh").style.display = "block";
            break;
        }
        case "": {
            getElee("btnThem").style.display = "none";
            getElee("tableHs").style.display = "none";
            getElee("tableNv").style.display = "none";
            getElee("tableKh").style.display = "none";
            break;
        }
        default:
            break;
    }
}


// Hiển thị danh sách Học sinh
function renderStudent(student) {
    let html = student.reduce((result, student) => {
        if(!(student instanceof Student)) return result

        return (result +
            `
            <tr>
                <td>${student.id}</td>
                <td>${student.fullName}</td>
                <td>${student.address}</td>
                <td>${student.email}</td>
                <td>${student.math}</td>
                <td>${student.physics}</td>
                <td>${student.chemistry}</td>
                <td>${student.averageGrade()}</td>
                <td>
                    <button class="btn btn-primary my-1"  data-toggle="modal" data-target="#personModal" onclick="selectStudent('${student.id}')" title="Cập nhật"><i class="fa-regular fa-pen-to-square"></i></button>
                    <button class="btn btn-danger my-1" onclick="deleteStudent('${student.id}')" title="Xóa"><i class="fa-regular fa-trash-can"></i></button>
                </td>
            </tr>
            `
        );
    }, "");

    getEle("#ListHs").innerHTML = html;
}

// Hiển thị danh sách Nhân viên
function renderEmployee(employee) {
    let html = employee.reduce((result, employee) => {
        if(!(employee instanceof Employee)) return result
        return (result +
            `
            <tr>
                <td>${employee.id}</td>
                <td>${employee.fullName}</td>
                <td>${employee.address}</td>
                <td>${employee.email}</td>
                <td>${employee.days}</td>
                <td>${employee.totalSalary()}</td>
                <td>
                    <button class="btn btn-primary my-1" data-toggle="modal" data-target="#personModal" onclick="selectEmployee('${employee.id}')" title="cập nhật"><i class="fa-regular fa-pen-to-square"></i></button>
                    <button class="btn btn-danger my-1" onclick="deleteEmployee('${employee.id}')" title="Xóa"><i class="fa-regular fa-trash-can"></i></button>
                </td>
            </tr>
            `
        );
    }, "");

    getEle("#ListNv").innerHTML = html;
}

// Hiển thị danh sách khách hàng
function renderCustomer(customer) {
    let html = customer.reduce((result, customer) => {
        if(!(customer instanceof Customer)) return result
        return (result +
            `
            <tr>
                <td>${customer.id}</td>
                <td>${customer.fullName}</td>
                <td>${customer.address}</td>
                <td>${customer.email}</td>
                <td>${customer.company}</td>
                <td>${customer.invoice}</td>
                <td>${customer.comment}</td>
                <td>
                    <button class="btn btn-primary my-1" data-toggle="modal" data-target="#personModal" onclick="selectCustomer('${customer.id}')" title="Cập nhật"><i class="fa-regular fa-pen-to-square"></i></button>
                    <button class="btn btn-danger my-1" onclick="deleteCustomer('${customer.id}')" title="Xóa"><i class="fa-regular fa-trash-can"></i></button>
                </td>
            </tr>
            `
        );
    }, "");

    getEle("#ListKh").innerHTML = html;
}

// Thêm  học sinh
window.createStudent = function createStudent() {
    let id = getEle("#id").value;
    let fullName = getEle("#fullName").value;
    let email = getEle("#email").value;
    let address = getEle("#address").value;
    let math = getEle("#math").value;
    let physics = getEle("#physics").value
    let chemistry = getEle("#chemistry").value

    const student = new Student(id, fullName, address, email, math, physics, chemistry);

    ListPerson.push(student);

    renderStudent(ListPerson);

    resetForm()
    
    $('#exampleModal').modal('hide')
}
// Thêm nhân viên
window.createEmployee = function createEmployee() {
    let id = getEle("#modalEmployee #id2").value;
    let fullName = getEle("#modalEmployee #fullName2").value;
    let email = getEle("#modalEmployee #email2").value;
    let address = getEle("#modalEmployee #address2").value;
    let days = getEle("#days").value;
    let baseSalary = getEle("#baseSalary").value;

    const employee = new Employee(id, fullName, address, email, days, baseSalary);

    ListPerson.push(employee);
    renderEmployee(ListPerson);

    resetForm()
}
// Thêm khách hàng
window.createCustomer = function createCustomer() {
    let id = getEle("#modalCustomer #id3").value;
    let fullName = getEle("#modalCustomer #fullName3").value;
    let email = getEle("#modalCustomer #email3").value;
    let address = getEle("#modalCustomer #address3").value;
    let company = getEle("#company").value;
    let invoice = getEle("#invoice").value;
    let comment = getEle("#comment").value;

    const customer = new Customer(id, fullName, address, email, company, invoice, comment)

    ListPerson.push(customer);

    renderCustomer(ListPerson);

    resetForm()
}
// reset form
function resetForm() {
    getEle("#id").value = ""
    getEle("#fullName").value = ""
    getEle("#email").value = ""
    getEle("#address").value = ""
    getEle("#math").value = ""
    getEle("#physics").value = ""
    getEle("#chemistry").value = ""
    getEle("#days").value = ""
    getEle("#baseSalary").value = ""
    getEle("#company").value = ""
    getEle("#invoice").value = ""
    getEle("#comment").value = ""
    getEle("#btnAdd").disabled = false;
}

// xóa học sin theo id
window.deleteStudent = function deleteStudent(studentId) {
    ListPerson = ListPerson.filter((student) => {
        return student.id !== studentId
    })

    renderStudent(ListPerson);
}
// xóa nhân viên theo id
window.deleteEmployee = function deleteEmployee(employeeId) {
    ListPerson = ListPerson.filter((employee) => {
        return employee.id !== employeeId
    })

    renderEmployee(ListPerson);
}
// xóa khách hàng theo id
window.deleteCustomer = function deleteCustomer(customerId) {
    ListPerson = ListPerson.filter((customer) => {
        return customer.id !== customerId
    })

    renderCustomer(ListPerson);
}

// fill thông tin student lên form
window.selectStudent = function selectStudent(studentId) {
    let selectStudent = ListPerson.find((student) => {
        return student.id === studentId
    })

    getEle("#id").value = selectStudent.id;
    getEle("#fullName").value = selectStudent.fullName;
    getEle("#email").value = selectStudent.email;
    getEle("#address").value = selectStudent.address;
    getEle("#math").value = selectStudent.math;
    getEle("#physics").value = selectStudent.physics;
    getEle("#chemistry").value = selectStudent.chemistry;
    getEle("#btnCapNhat").style.display = "block"
    getEle("#btnAdd").disabled = true;

    $("#myModal").modal("show");
}
// fill thông tin employee lên form
window.selectEmployee = function selectEmployee(employeeId) {
    let selectEmployee = ListPerson.find((employee) => {
        return employee.id === employeeId
    })

    getEle("#modalEmployee #id2").value = selectEmployee.id;
    getEle("#modalEmployee #fullName2").value = selectEmployee.fullName;
    getEle("#modalEmployee #email2").value = selectEmployee.email;
    getEle("#modalEmployee #address2").value = selectEmployee.address;
    getEle("#days").value = selectStudent.days;
    getEle("#baseSalary").value = selectStudent.baseSalary;
    getEle("#modalEmployee #btnCapNhat").style.display = "block"
    getEle("#modalEmployee #btnAdd").disabled = true;

    $("#myModal").modal("show");

}
// fill thông tin customer lên form
window.selectCustomer = function selectCustomer(customerId) {
    let selectCustomer = ListPerson.find((customer) => {
        return customer.id === customerId
    })
    getEle("#modalCustomer #id3").value = selectCustomer.id;
    getEle("#modalCustomer #fullName3").value = selectCustomer.fullName;
    getEle("#modalCustomer #email3").value = selectCustomer.email;
    getEle("#modalCustomer #address3").value = selectCustomer.address;
    getEle("#days").value = selectCustomer.days;
    getEle("#baseSalary").value = selectCustomer.baseSalary;
    getEle("#modalCustomer #btnCapNhat").style.display = "block"
    getEle("#modalCustomer #btnAdd").disabled = true;

    $("#myModal").modal("show");

}
// cập nhật học sinh
window.updateStudent = function updateStudent() {
    let id = getEle("#id").value;
    let fullName = getEle("#fullName").value;
    let email = getEle("#email").value;
    let address = getEle("#address").value;
    let math = getEle("#math").value;
    let physics = getEle("#physics").value;
    let chemistry = getEle("#chemistry").value;

    const student = new Student(id, fullName, address, email, math, physics, chemistry);

    let index = ListPerson.findIndex((student) => {
        return student.id === id
    })

    ListPerson[index] = student;

    renderStudent(ListPerson);

    resetForm()

    getEle("#btnCapNhat").style.display = "none"
}

// cập nhật sinh viên
window.updateEmployee = function updateEmployee() {
    let id = getEle("#modalEmployee #id2").value;
    let fullName = getEle("#modalEmployee #fullName2").value;
    let email = getEle("#modalEmployee #email2").value;
    let address = getEle("#modalEmployee #address2").value;
    let days = getEle("#days").value;
    let baseSalary = getEle("#baseSalary").value;

    const employee = new Employee(id, fullName, address, email, days, baseSalary);

    let index = ListPerson.findIndex((employee) => {
        return employee.id === id
    })

    ListPerson[index] = employee;

    renderEmployee(ListPerson);

    resetForm()

    getEle("#btnCapNhat").style.display = "none"
}
// cập nhật khách hàng
window.updateCustomer = function updateCustomer() {
    let id = getEle("#modalCustomer #id3").value;
    let fullName = getEle("#modalCustomer #fullName3").value;
    let email = getEle("#modalCustomer #email3").value;
    let address = getEle("#modalCustomer #address3").value;
    let company = getEle("#company").value;
    let invoice = getEle("#invoice").value;
    let comment = getEle("#comment").value;

    const customer = new Customer(id, fullName, address, email, company, invoice, comment)

    let index = ListPerson.findIndex((customer) => {
        return customer.id == id
    })

    ListPerson[index]  = customer;

    renderCustomer(ListPerson);

    resetForm()

    getEle("#btnCapNhat").style.display = "none"
}