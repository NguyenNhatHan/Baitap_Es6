
class Person {
    constructor(id, fullName, address, email) {
        this.id = id
        this.fullName = fullName;
        this.address = address;
        this.email = email;
    }
}

class Student extends Person {
    constructor(id, fullName, address, email, math, physics, chemistry) {
        super(id, fullName, address, email);
        this.math = Number(math);
        this.physics = Number(physics);
        this.chemistry = Number(chemistry);
    }

    averageGrade() {
        return ((+this.math) + (+this.physics) + (+this.chemistry)) / 3;
    }
}

class Employee extends Person {
    constructor(id, fullName, address, email, days, baseSalary) {
        super(id, fullName, address, email);
        this.days = Number(days);
        this.baseSalary = Number(baseSalary);
    }

    totalSalary() {
        return  this.days * this.baseSalary;
        
    }
}

class Customer extends Person {
    constructor(id, fullName, address, email, company, invoice, comment) {
        super(id, fullName, address, email);
        this.company = company;
        this.invoice = Number(invoice).toLocaleString();
        this.comment = comment;
    }
}

export { Person, Student, Employee, Customer };