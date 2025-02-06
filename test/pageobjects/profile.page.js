const { $, expect } = require('@wdio/globals')

class EditUser {

    async GoToSettings() {
        await $('button[data-action="customer-menu-toggle"]').click();
        expect($('//a[text()="My Account"]')).toBeDisplayed()
        await $('//a[text()="My Account"]').click();
      }

   // get NameInput() {
   //     return $("[name='q']");
   // }
   get btnSave () {
    return $("button[title='Save']");
}
    get inputFirstname () {
        return $(('input[name="firstname"]'));
}

    async ChangeName(newName){
        //  async setNameInput(searchValue) {
        //    await this.searchInput.setValue(searchValue);
        const accountEditLink = await browser.$('a[href="https://www.htfr.com/customer/account/edit/"]');
        await accountEditLink.waitForExist({ timeout: 5000 });
        await accountEditLink.click();
        await expect(this.inputFirstname).toBeDisplayed();
        await this.inputFirstname.setValue(newName);
        await expect(this.btnSave).toBeDisplayed();
        await this.btnSave.click()
          }
    }

module.exports = new EditUser();