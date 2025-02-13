const BasePage = require('../core/base.page');

class SearchPage extends BasePage {
  get searchInput() {
    return $('input[id="search"]');
  }

  async setSearchInput(searchValue) {
    await this.searchInput.waitForDisplayed({ timeout: 10000 });
    await this.searchInput.setValue(searchValue);
  }

  async getSearchInputValue() {
    return await this.searchInput.getValue();
  }

  async pressEnter() {
    await browser.keys('Enter');
  }
}

module.exports = new SearchPage();
