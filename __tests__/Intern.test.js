// using Intern constructor
const Intern = require('../lib/Intern');

// creating intern object
test('creates an Intern object', () => {
    const intern = new Intern('Sara', 50, 'sara222@gmail.com', 'UCF');

    expect(intern.school).toEqual(expect.any(String));
});

// gets school from getSchool()
test('gets employee school', () => {
    const intern = new Intern('Sara', 50, 'sara222@gmail.com', 'UCF');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});
// gets role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('Sara', 50, 'sara222@gmail.com', 'UCF');

    expect(intern.getRole()).toEqual('Intern');
});
