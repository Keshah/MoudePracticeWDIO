const BasePage = require("../core/base.page");

class LoginPage extends BasePage {
    get signInLink() { return $('//a[contains(text(), "Sign In")]'); }
    get inputUsername() { return $('input[name="login[username]"]'); }
    get inputPassword() { return $('input[name="login[password]"]'); }
    get btnSubmit() { return $("button[id='send2']"); }
    get welcomeMessage() { return $('li[class="greet welcome"]'); }

    async clickOnLogIn() {
        await this.click(this.signInLink);
    }

    async login(username, password) {
        await this.typeText(this.inputUsername, username);
        await this.typeText(this.inputPassword, password);
        await this.click(this.btnSubmit);
    }

    async isLoginSuccessful() {
        return await this.isElementDisplayed(this.welcomeMessage);
    }
}

module.exports = new LoginPage();
