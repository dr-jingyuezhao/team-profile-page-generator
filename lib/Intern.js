// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// Draft code based on the starter code provided by the class instructor (Dan Mueller)
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) { // and whatever else is necessary
        super(name, id, email);
        this.school = school;
    }
}

module.exports = Intern;