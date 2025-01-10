const { I } = inject();

module.exports = {

    // insert your locators
    fields: {
      Fullname: 'Type for hints...',
      Username: '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[4]/div/div[2]/input',
      Password1: '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[1]/div/div[2]/input',
      Password2: '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[2]/div/div[2]/input',
     },
   
     submitButton: {
      xpath: '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[3]/button[2]',
      
     },
   
    // introducing methods
    sendForm(Fullname, Username, Password1, Password2) { 
      I.click('/html/body/div/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[1]/div/div[2]/div/div/div[2]/i'); //User Role select button
      I.pressKey('ArrowDown');
      I.pressKey('Enter'); //Select Admin Role
      I.fillField(this.fields.Fullname, Fullname);
      I.wait(5);
      I.pressKey('ArrowDown');
      I.pressKey('Enter');
      I.click('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[3]/div/div[2]/div/div/div[2]/i'); //Status
      I.pressKey('ArrowDown');
      I.pressKey('Enter'); //Select Enabled
      I.fillField(this.fields.Username, Username);
      I.fillField(this.fields.Password1, Password1);
      I.fillField(this.fields.Password2, Password2);
      I.click(this.submitButton);
    }

}
