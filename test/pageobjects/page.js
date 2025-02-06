const { browser } = require('@wdio/globals')

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class MainPage {
    async open() {
    await browser.url('https://www.htfr.com/');
    
    }
  }
  
  module.exports = new MainPage();