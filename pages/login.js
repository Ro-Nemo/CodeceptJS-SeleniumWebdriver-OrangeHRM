const { I } = inject();

module.exports = {

  // insert your locators
  fields: {
    user: 'Username',
    password: 'Password'
   },
 
   submitButton: {

  xpath: '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button',
    
   },
 
  // introducing methods
  sendForm(user, password) { 
    I.fillField(this.fields.user, user);
    I.fillField(this.fields.password, password);
    I.click(this.submitButton);
   }




}
