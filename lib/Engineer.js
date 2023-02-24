// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// Add the starter code provided by the class instructor (Dan Mueller)

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) { // and whatever else is necessary
        super(name, id, email);
        this.github = github;
    }
}

module.exports = Engineer;