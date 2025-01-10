const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login/',
      browser: 'chrome',
      windowSize: 'maximize'
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: "./pages/login.js",
    addemployeePage: "./pages/addemployee.js",
    addAdminPage: "./pages/addAdmin.js",
  },
  name: 'Demo_Project_01'
}