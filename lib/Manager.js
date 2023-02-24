// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// Draft code based on the starter code provided by the class instructor (Dan Mueller)
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) { // and whatever else is necessary
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
}

module.exports = Manager;