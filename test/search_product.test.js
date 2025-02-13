const { expect } = require('chai');
const MainPage = require('../business/main.page');
const LoginPage = require('../business/login.page');
const SearchPage = require('../business/search.page');

describe('5. Search for a product', () => {
  it('should search an item by input', async () => {
    await MainPage.open();
    await LoginPage.clickOnLogIn();
    await LoginPage.login("keshah717@gmail.com", "Password2222");
    await SearchPage.setSearchInput("vinyl");
    const searchInputValue = await SearchPage.getSearchInputValue();
    expect(searchInputValue).to.equal('vinyl');
    await SearchPage.pressEnter();
    await browser.pause(5000);
  });
});