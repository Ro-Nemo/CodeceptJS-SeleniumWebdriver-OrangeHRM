const { I } = inject();

module.exports = {

   // insert your locators
   fields: {
    Firstname: 'firstName',
    Lastname: 'lastName',
    EmployeeId: ({css: 'div.oxd-grid-2.orangehrm-full-width-grid > div > div > div:nth-child(2) > input'}),


   },
 
   submitButton: {
    css: 'button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space',

   },
 
  // introducing methods
  sendForm(Firstname, Lastname, EmployeeId) { 
    I.fillField(this.fields.Firstname, Firstname);
    I.fillField(this.fields.Lastname, Lastname);
    I.doubleClick({css: 'div.oxd-grid-2.orangehrm-full-width-grid > div > div > div:nth-child(2) > input'});
    I.pressKey('Backspace');
    I.fillField(this.fields.EmployeeId, EmployeeId);
    I.click(this.submitButton);
}


}