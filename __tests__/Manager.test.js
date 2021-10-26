// using Manager constructor
const Manager = require('../lib/Manager');

// creating manager object
test('creates a Manager object', () => {
const manager = new Manager('Sara', 50, 'sara222@gmail.com', 5);

expect(manager.officeNumber).toEqual(expect.any(Number));
});
// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Sara', 50, 'sara222@gmail.com', 5);
    
    expect(manager.getRole()).toEqual('Manager');
});