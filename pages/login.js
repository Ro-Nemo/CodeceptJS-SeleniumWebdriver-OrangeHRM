const { I } = inject();

module.exports = {

  // insert your locators
  fields: {
    user: 'username',
    pass: 'password'
   },
 
   submitButton: {

  xpath: '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button',
    
   },
 
  // introducing methods
  sendForm(user, pass) { 
    I.fillField(this.fields.user, user);
    I.fillField(this.fields.pass, pass);
    I.click(this.submitButton);
   }




}
