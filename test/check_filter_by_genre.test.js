const MainPage = require('../business/main.page');
const FilterPage = require('../business/filter.page');
const { expect } = require('chai');

describe('7. Check filter by genre', () => {
  it('should search certain genre', async () => {
    await MainPage.open();
    await FilterPage.goToFilters();
    const isGenreFound = await FilterPage.filterByGenre("Disco");
    expect(isGenreFound).to.be.true;
    await browser.pause(5000);
  });
});