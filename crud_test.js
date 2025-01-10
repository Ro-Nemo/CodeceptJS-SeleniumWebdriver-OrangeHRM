const { faker } = require('@faker-js/faker');

Feature('crud_test');

Scenario('Test CRUD in Employee and Admin user', async ({ I, loginPage, addemployeePage, addAdminPage }) => {

const userid = 'Admin';
const password = 'admin123';
const fname = faker.person.firstName();
const lname = faker.person.lastName();
const EmployName = fname + ' ' + lname;
const username = 'admin' + lname;

let EmployNumb = faker.number.int({ min: 100000000, max: 999999999 }) 



//Precondition: An Employee must be created in PIM before it can be assigned as an Admin user" 

//GIVEN I have the admin credentials to the orangehrmlive portal and create and edit a new employee.
I.amOnPage('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
I.waitForElement('/html/body/div/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input', 20); 
I.see('Username');
loginPage.sendForm(userid, password);
I.waitForElement('/html/body/div/div[1]/div[1]/header/div[1]/div[1]/span/h6', 20); 
I.see('Dashboard');


//WHEN I Navigate to "PIM" on the side navigation bar. 
I.click('/html/body/div/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a/span');  //PIM menu
I.waitForElement('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[1]/div[1]/h5', 20); 
I.see('Employee Information');

//AND I Click on "Add." 
I.click('/html/body/div/div[1]/div[2]/div[2]/div/div[2]/div[1]/button'); //Add button
I.waitForElement('/html/body/div/div[1]/div[2]/div[2]/div/div/h6', 20); 
I.see('Add Employee');

//AND I create a new employee
I.wait(3);
addemployeePage.sendForm(fname, lname, EmployNumb);
I.waitForElement('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/h6', 20); 
I.see('Personal Details');

//AND I search the new employee
I.click('/html/body/div/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a/span');  //PIM menu
I.waitForElement('/html/body/div/div[1]/div[1]/header/div[1]/div[1]/span/h6', 20); 
I.see('PIM');
I.fillField('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/div/div/input', EmployName);
I.wait(5);
I.pressKey('ArrowDown');
I.pressKey('Enter');
I.click('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[2]');  //Search button
I.wait(3);
I.see(EmployNumb);

//THEN I edit the new employee
I.click('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]/div/div/div[9]/div/button[1]');  //Edit button
I.waitForElement('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/h6', 20); 
I.see('Personal Details');
I.see(EmployName);
I.doubleClick('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[2]/div[1]/div[1]/div/div[2]/input'); 
I.pressKey('Backspace');
EmployNumb = faker.number.int({ min: 100000000, max: 999999999 }) //new Employee Id
I.fillField('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[2]/div[1]/div[1]/div/div[2]/input', EmployNumb); //Update Employee Id field
I.click('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[4]/button');  //Save button
I.click('/html/body/div/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a/span');  //PIM menu
I.waitForElement('/html/body/div/div[1]/div[1]/header/div[1]/div[1]/span/h6', 20); 
I.see('PIM');
I.fillField('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/div/div/input', EmployName);
I.wait(5);
I.pressKey('ArrowDown');
I.pressKey('Enter');
I.click('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[2]');  //Search button
I.wait(3);
I.see(EmployNumb); //View new Employee Id



//GIVEN I have the admin credentials to assign a new employee as an Admin User.

//WHEN I navigate to "Admin" on the side navigation bar. 
I.click('/html/body/div/div[1]/div[1]/aside/nav/div[2]/ul/li[1]/a/span');  //Admin menu
I.waitForElement('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[1]/div[1]/h5', 20); 
I.see('System Users');

//AND I assign the new employee as an Admin User
I.click('/html/body/div/div[1]/div[2]/div[2]/div/div[2]/div[1]/button'); //Add button
I.waitForElement('/html/body/div/div[1]/div[2]/div[2]/div/div/h6', 20); 
I.see('Add User');
addAdminPage.sendForm(EmployName, username, password, password);
I.waitForElement('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[1]/div[1]/h5', 20); 
I.see('System Users');

//AND I search the the new Admin User
I.wait(3);
I.fillField('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/input', username);
I.click('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[2]'); //Search button
I.wait(3);
I.see(EmployName);

//AND I edit the new admin user
I.click('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]/div/div/div[6]/div/button[2]');  //Edit button
I.waitForElement('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/h6', 20); 
I.see('Edit User');
I.wait(5);
I.click('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[3]/div/div[2]/div/div/div[2]/i'); //Status
for (i = 1; i <= 2; i++) {
	I.pressKey('ArrowDown');
  }
I.pressKey('Enter'); //Update to disabled
I.click('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/button[2]'); //Save button
I.waitForElement('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[1]/div[1]/h5', 20);
I.wait(5);
I.see('System Users');
I.fillField('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/input', username);
I.click('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[2]'); //Search button
I.wait(5);
I.see(EmployName);
I.see('Disabled'); // View the Admin with the updated status to Disabled


//THEN I delete the Admin role for the new employee
I.click('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]/div/div/div[6]/div/button[1]'); //Delete button
I.wait(1);
I.click('//*[@id="app"]/div[3]/div/div/div/div[3]/button[2]'); //Yes, Delete button
I.wait(5);
I.click('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[2]'); //Search button
I.wait(3);
I.dontSee(EmployName);

//AND I delete the new employee
I.click('/html/body/div/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a/span');  //PIM menu
I.waitForElement('/html/body/div/div[1]/div[1]/header/div[1]/div[1]/span/h6', 20); 
I.see('PIM');
I.fillField('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/div/div/input', EmployName);
I.wait(5);
I.pressKey('ArrowDown');
I.pressKey('Enter');
I.click('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[2]');  //Search button
I.wait(5);
I.see(EmployNumb);
I.click('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]/div/div/div[9]/div/button[2]'); //Delete button
I.wait(1);
I.click('//*[@id="app"]/div[3]/div/div/div/div[3]/button[2]'); //Yes, Delete button
I.wait(5);
I.dontSee(EmployNumb);


});
