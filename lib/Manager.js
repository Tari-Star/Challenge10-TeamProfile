// importing Employee constructor
const Employee = require('./Employee');

//manager  constructor extends employee constructor
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
    // overide employee role to manager
    getRole () {
        return 'Manager';
    }
}
 
module.exports = Manager;