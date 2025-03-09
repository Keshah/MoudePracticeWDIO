const BasePage = require("../core/base.page");

class ProfilePage extends BasePage {
  get btnCustomerMenu() {
    return $('button[data-action="customer-menu-toggle"]');
  }
  get linkMyAccount() {
    return $('//a[text()="My Account"]');
  }
  get linkEditProfile() {
    return $('a[href="https://www.htfr.com/customer/account/edit/"]');
  }
  get inputFirstname() {
    return $('input[name="firstname"]');
  }
  get btnSave() {
    return $("button[title='Save']");
  }

  async goToSettings() {
    await this.btnCustomerMenu.waitForDisplayed({ timeout: 10000 });
    await this.btnCustomerMenu.moveTo(); // Наводим курсор на элемент
    await browser.pause(500); // Небольшая задержка
    await this.btnCustomerMenu.click();

    await this.linkMyAccount.waitForDisplayed({ timeout: 10000 });
    await this.linkMyAccount.click();
  }

  async changeName(newName) {
    await this.linkEditProfile.waitForDisplayed();
    await this.linkEditProfile.click();
    await this.inputFirstname.waitForDisplayed();
    await this.inputFirstname.setValue(newName);
    await this.btnSave.click();
  }
}

module.exports = new ProfilePage();
