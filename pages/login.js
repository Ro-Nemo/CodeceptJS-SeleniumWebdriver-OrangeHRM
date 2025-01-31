const { I } = inject();

module.exports = {

  // insert your locators
  fields: {
    user: 'username',
    pass: 'password'
   },
 
   submitButton: {

  //css: '.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button',
  css: '.orangehrm-login-button',


   },
 
  // introducing methods
  sendForm(user, pass) { 
    I.fillField(this.fields.user, user);
    I.fillField(this.fields.pass, pass);
    I.click(this.submitButton);
   }




}
