const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "AlecBaldwin";
    const employeeInstance = new Engineer("Alec", 2, "alecbaldwin@utbc.org", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "AlecBaldwin";
    const employeeInstance = new Engineer("Alec", 2, "alecbaldwin@utbc.org", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Alec", 2, "alecbaldwin@utbc.org", "AlecBaldwin");
    expect(employeeInstance.getRole()).toBe(returnValue);
});