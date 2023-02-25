// Define and export the Employee class
class Employee {
    // Add the code for constructor
    constructor(name, id, email) { 
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // method getName()
    getName() {
        return this.name;
    }
    // method getId()
    getId() {
        return this.id;
    }
    // method getEmail()
    getEmail() {
         return this.email;
    }
    // method getRole()—returns 'Employee'
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;