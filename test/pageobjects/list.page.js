const { $, expect } = require('@wdio/globals')

class ListPage {
    async clickOnFirstBoard() {

        const boardList = await $('ul.boards-page-board-section-list');
        await boardList.waitForDisplayed();
        const firstBoard = await boardList.$('li:first-child a.board-tile'); // выбирает первую доступную доску
        await firstBoard.waitForClickable();
        await firstBoard.click();}

    get inputList () {
        return $(('textarea[name="Введите имя колонки…"]'));
    }

    async createList(listName){
        expect($('button[data-testid="list-composer-button"]')).toBeDisplayed()
        await $('button[data-testid="list-composer-button"]').click()
        await this.inputList.setValue(listName);
        await $('button[data-testid="list-composer-add-list-button"]').click()
    }
    }


module.exports = new ListPage();