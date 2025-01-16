const { I } = inject();

module.exports = {

    // insert your locators
    fields: {
      Fullname: 'Type for hints...',
      Username: ({css: 'div.oxd-grid-item:nth-child(4) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'}),
      Password1: ({css: '.user-password-cell > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'}),
      Password2: ({css: 'div.oxd-form-row:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)'}),
     },

     submitButton: {
      css: 'button.oxd-button:nth-child(3)',

     },
   
    // introducing methods
    sendForm(Fullname, Username, Password1, Password2) { 
      
      I.click({css: 'div:nth-child(1) > div > div:nth-child(2) > div > div > div.oxd-select-text-input'}); //User Role select button
      I.pressKey('ArrowDown');
      I.pressKey('Enter'); //Select Admin Role
      I.fillField(this.fields.Fullname, Fullname);
      I.wait(3);
      I.pressKey('ArrowDown');
      I.pressKey('Enter');
      I.click({css: 'div:nth-child(3) > div > div:nth-child(2) > div > div > div.oxd-select-text-input'}); //Status select button      
      I.pressKey('ArrowDown');
      I.pressKey('Enter'); //Select Enabled
      I.fillField(this.fields.Username, Username);
      I.fillField(this.fields.Password1, Password1);
      I.fillField(this.fields.Password2, Password2);
      I.click(this.submitButton);
    }

}
