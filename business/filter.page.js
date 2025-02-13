const BasePage = require('../core/base.page');
const { $, expect } = require('@wdio/globals');

class FilterPage extends BasePage {
  /**
   * Переходит на страницу фильтров, нажимая на ссылку фильтра по жанрам.
   */
  async goToFilters() {
    const filtersLink = $('a[href="/catalog/category/view/s/genres/id/3/?product_list_order=news_from_date&product_list_dir=desc"]');
    await filtersLink.waitForDisplayed({ timeout: 10000 });
    await filtersLink.click();

    const genreTitle = $('//span[normalize-space(text())="Genres"]');
    await genreTitle.waitForDisplayed({ timeout: 10000 });
  }

  /**
   * Фильтрует товары по указанному жанру.
   * @param {string} genre - Название жанра для фильтрации (например, "Disco").
   * @returns {Promise<boolean>} Возвращает true, если после фильтрации отображается элемент с указанным жанром.
   */
  async filterByGenre(genre) {
    const genreFilter = await $('//div[@data-role="title" and text()="Genre"]');
    await genreFilter.waitForDisplayed({ timeout: 10000 });
    await genreFilter.click();

    const genreItem = await $(`//li[@class="item"]/a[text()="${genre}"]`);
    await genreItem.waitForDisplayed({ timeout: 10000 });
    await genreItem.click();

    // Проверяем, что после фильтрации отображается элемент с нужным жанром.
    const displayedGenre = $(`//a[normalize-space(text())="${genre}"]`);
    await displayedGenre.waitForDisplayed({ timeout: 10000 });
    return await displayedGenre.isDisplayed();
  }
}

module.exports = new FilterPage();