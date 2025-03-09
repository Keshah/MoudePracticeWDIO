const BasePage = require("../core/base.page");

class MainPage extends BasePage {
  async open() {
    await super.open("https://www.htfr.com/");
  }
}

module.exports = new MainPage();
