const { $, expect } = require('@wdio/globals')

class SearchPage {

    get searchInput() {
        return $('input[id="search"]');
      }
    
      async setSearchInput(searchValue) {
        await this.searchInput.setValue(searchValue);
      }
      
      async getSearchInputValue() {
        const inputField = await $('input[id="search"]');
        return await inputField.getValue();
    }

      async pressEnter() {
       await browser.keys('Enter');
      }}

module.exports = new SearchPage();