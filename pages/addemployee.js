const { I } = inject();

module.exports = {

   // insert your locators
   fields: {
    firstname: 'First Name',
    lastname: 'Last Name',
    EmployeeId: '/html/body/div/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[2]/div/div/div[2]/input'
   },
 
   submitButton: {
    xpath: '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/button[2]',
    
   },
 
  // introducing methods
  sendForm(firstname, lastname, EmployeeId) { 
    I.fillField(this.fields.firstname, firstname);
    I.fillField(this.fields.lastname, lastname);
    I.doubleClick('/html/body/div/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[2]/div/div/div[2]/input');
    I.pressKey('Backspace');
    I.fillField(this.fields.EmployeeId, EmployeeId);
    I.click(this.submitButton);
}


}