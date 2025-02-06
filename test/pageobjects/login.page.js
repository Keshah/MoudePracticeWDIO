const { $, expect } = require('@wdio/globals')
const Page = require('./page');

class LoginPage {

    async clickOnLogIn() {
        await $('//a[contains(text(), "Sign In")]').click();
        expect($('input[name="username"]')).toBeDisplayed()
        expect($('input[name="password"]')).toBeDisplayed()
      }

    get inputUsername () {
        return $(('input[name="login[username]"]'));
    }

    get inputPassword () {
        return $(('input[name="login[password]"]'));
    }

    get btnSubmit () {
        return $("button[id='send2']");
    }


    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.scrollIntoView();
        await this.btnSubmit.click();
    }
}

module.exports = new LoginPage();
