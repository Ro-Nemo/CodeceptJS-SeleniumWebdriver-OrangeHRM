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
//I.waitForElement('.orangehrm-login-title', 20);     
I.waitForElement({css: 'div.orangehrm-login-slot'}, 20);     
I.see('Login');
loginPage.sendForm(userid, secret(password));
I.waitForElement({css: 'div.oxd-topbar-header-title'}, 20);    
I.see('Dashboard');

//WHEN I Navigate to "PIM" on the side navigation bar. 
I.click('PIM', {css: 'div.oxd-sidepanel-body'}); 
I.waitForElement({css: 'div.oxd-table-filter-header-title'}, 20);    
I.see('Employee Information');

//AND I Click on "Add." 
I.click('Add', {css: 'div.orangehrm-header-container'});      //add button
//I.click({css: 'button.oxd-button--secondary:nth-child(1)'});   

I.waitForElement({css: 'div.oxd-layout-context'}, 20);    
I.see('Add Employee');

//AND I create a new employee
I.wait(3);
addemployeePage.sendForm(fname, lname, EmployNumb);
I.waitForElement({css: 'div.orangehrm-horizontal-padding.orangehrm-vertical-padding'}, 20);   
I.see('Personal Details');

//AND I search the new employee
I.click('PIM', {css: 'div.oxd-sidepanel-body'}); 
I.waitForElement({css: 'div.oxd-table-filter-header-title'}, 20);    
I.see('Employee Information');   
I.fillField({css: 'div:nth-child(1) > div > div:nth-child(2) > div > div > input'}, EmployName);  
I.wait(3);
I.pressKey('ArrowDown');
I.pressKey('Enter');
I.click({css: 'button.oxd-button:nth-child(2)'});   //Search button
I.wait(3);
I.see(EmployNumb);

//THEN I edit the new employee
I.click({css: 'button.oxd-table-cell-action-space:nth-child(1)'});    //edit button
I.waitForElement({css: 'div.orangehrm-horizontal-padding.orangehrm-vertical-padding'}, 20);
I.wait(3);
I.see('Personal Details');
I.see(EmployName);
I.doubleClick({css: 'div.oxd-form-row:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'}); 
I.pressKey('Backspace');
EmployNumb = faker.number.int({ min: 100000000, max: 999999999 }) //new Employee Id
I.fillField({css: 'div.oxd-form-row:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'}, EmployNumb); //Update Employee Id field
I.click('Save', {css: 'div.orangehrm-horizontal-padding.orangehrm-vertical-padding'});   
I.wait(5);
I.click('PIM', {css: 'div.oxd-sidepanel-body'}); 
I.waitForElement({css: 'div.oxd-table-filter-header-title'}, 20);    
I.see('Employee Information');  
I.fillField({css: 'div:nth-child(1) > div > div:nth-child(2) > div > div > input'}, EmployName);  
I.wait(3);
I.pressKey('ArrowDown');
I.pressKey('Enter');
I.click({css: 'button.oxd-button:nth-child(2)'});   //Search button
I.wait(3);
I.see(EmployNumb); //View new Employee Id


//GIVEN I have the admin credentials to assign a new employee as an Admin User.

//WHEN I navigate to "Admin" on the side navigation bar. 
I.click('Admin', {css: 'div.oxd-sidepanel-body'});    //Admin menu
I.wait(3);
I.waitForElement({css: 'div.oxd-table-filter-header-title'}, 20);    
I.see('System Users');

//AND I assign the new employee as an Admin User
I.click('Add', {css: 'div.orangehrm-header-container'});      //add button
I.waitForElement({css: 'div.oxd-layout-context'}, 20);    
I.wait(3);
I.see('Add User');
addAdminPage.sendForm(EmployName, username, secret(password), secret(password));
I.wait(10);
I.waitForElement({css: 'div.oxd-table-filter-header-title'}, 20);    
//I.waitForElement('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[1]/div[1]/h5', 20); 
I.see('System Users');

//AND I search the the new Admin User
I.fillField({css: 'input.oxd-input:nth-child(1)'}, username); //User Name field
I.click({css: 'button.oxd-button:nth-child(2)'});   //Search button
I.wait(3);
I.see(EmployName);

//AND I edit the new admin user
I.click({css: 'button.oxd-icon-button:nth-child(2)'});    //edit button
I.waitForElement({css: 'div.oxd-input-group__label-wrapper'}, 20);    
I.wait(5);
I.see('Edit User');
I.click({css: 'div:nth-child(3) > div > div:nth-child(2) > div > div > div.oxd-select-text--after'}); //Status select button   
for (i = 1; i <= 2; i++) {
	I.pressKey('ArrowDown');
  }
I.pressKey('Enter'); //Update to disabled
I.click({css: 'button.oxd-button:nth-child(3)'});   //Save button
I.waitForElement({css: 'div.oxd-table-filter-header-title'}, 20);    
I.wait(5);
I.see('System Users');
I.fillField({css: 'input.oxd-input:nth-child(1)'}, username); //User Name field
I.click({css: 'button.oxd-button:nth-child(2)'});   //Search button
I.wait(5);
I.see(EmployName);
I.see('Disabled'); // View the Admin with the updated status to Disabled

//THEN I delete the Admin role for the new employee
I.click({css: 'button.oxd-table-cell-action-space:nth-child(1)'});   //Delete button
I.wait(1);
I.click('Yes, Delete');    //Yes, Delete button
I.wait(5);
I.click({css: 'button.oxd-button:nth-child(2)'});   //Search button
I.wait(3);
I.dontSee(EmployName);

//AND I delete the new employee
I.click('PIM', {css: 'div.oxd-sidepanel-body'}); 
I.waitForElement({css: 'div.oxd-table-filter-header-title'}, 20);    
I.see('Employee Information');   
I.fillField({css: 'div:nth-child(1) > div > div:nth-child(2) > div > div > input'}, EmployName);  
I.wait(3);
I.pressKey('ArrowDown');
I.pressKey('Enter');
I.click({css: 'button.oxd-button:nth-child(2)'});   //Search button
I.wait(3);
I.see(EmployNumb);
I.click({css: 'button.oxd-icon-button:nth-child(2)'});   //Delete button
I.wait(1);
I.click('Yes, Delete');    //Yes, Delete button
I.wait(5);
I.click({css: 'button.oxd-button:nth-child(2)'});   //Search button
I.wait(3);
I.dontSee(EmployNumb);


});
