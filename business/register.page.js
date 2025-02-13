const BasePage = require('../core/base.page');
const { $, expect } = require('@wdio/globals');

class RegisterPage extends BasePage {
  get inputFirstname() {
    return $('input[name="firstname"]');
  }

  get inputLastname() {
    return $('input[name="lastname"]');
  }

  get inputEmail() {
    return $('input[name="email"]');
  }

  get inputPassword() {
    return $('input[name="password"]');
  }

  get inputConfirmPassword() {
    return $('input[name="password_confirmation"]');
  }

  get btnSubmit() {
    return $('button[id="send2"]');
  }

  get linkCreateAccount() {
    return $('//a[contains(text(), "Create an Account")]');
  }

  async clickOnCreateAccount() {
    await this.linkCreateAccount.waitForDisplayed({ timeout: 10000 });
    await this.linkCreateAccount.click();
  }

  /**
   * Fill the form
   * @param {string} firstName 
   * @param {string} lastName 
   * @param {string} email 
   * @param {string} password 
   * @param {string} confPassword 
   */
  async register(firstName, lastName, email, password, confPassword) {
    await this.inputFirstname.waitForDisplayed({ timeout: 10000 });
    await this.inputFirstname.setValue(firstName);

    await this.inputLastname.waitForDisplayed({ timeout: 10000 });
    await this.inputLastname.setValue(lastName);

    await this.inputEmail.waitForDisplayed({ timeout: 10000 });
    await this.inputEmail.setValue(email);

    await this.inputPassword.waitForDisplayed({ timeout: 10000 });
    await this.inputPassword.setValue(password);

    await this.inputConfirmPassword.waitForDisplayed({ timeout: 10000 });
    await this.inputConfirmPassword.setValue(confPassword);

    await this.btnSubmit.scrollIntoView();
    await this.btnSubmit.click();
  }
}

module.exports = new RegisterPage();