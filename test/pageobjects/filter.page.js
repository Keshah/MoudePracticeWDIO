const { $, expect } = require('@wdio/globals')

class FilterPage {
    async goToFilters () {
        expect($('a[href="/catalog/category/view/s/genres/id/3/?product_list_order=news_from_date&product_list_dir=desc"]')).toBeDisplayed()
        await $('a[href="/catalog/category/view/s/genres/id/3/?product_list_order=news_from_date&product_list_dir=desc"]').click()
        expect($('//span[normalize-space(text())="Genres"]')).toBeDisplayed()

    }
    async filterByGenre(genre) {
        const genreFilter = await $('//div[@data-role="title" and text()="Genre"]');
        await genreFilter.click();
    
        const genreItem = await $(`//li[@class="item"]/a[text()="${genre}"]`);
        await genreItem.click();
        await expect($(`//a[normalize-space(text())="${genre}"]`)).toBeDisplayed() // check found items genre
    }


}

module.exports = new FilterPage();