// My Attempt
const Intern = require("../lib/Intern");

test("Can create school.", () => {
    const testSchool = "University of Texas at Austin";
    const employeeInstance = new Intern("Nicholas", 2, "nicholasdo@utbc.org", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});

test("Testing officeNumber will return office number.", () => {
    const testSchool = "University of Texas at Austin";
    const employeeInstance = new Intern("Nicholas", 2, "nicholasdo@utbc.org", testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Testing role.", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Nicholas", 2, "nicholasdo@utbc.org", "University of Texas at Austin");
    expect(employeeInstance.getRole()).toBe(returnValue);
});