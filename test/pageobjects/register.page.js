const { $, expect } = require('@wdio/globals')
const Page = require('./page');

class RegisterPage {

 //   async clickOnSignUp() {
//      await $('a=Log in').click();
//        expect($('input[name="username"]')).toBeDisplayed()
 //     }

    get inputFirstname () {
        return $(('input[name="firstname"]'));
    }
    get inputLastname () {
        return $(('input[name="lastname"]'));
    }
    get inputEmail () {
        return $(('input[name="email"]'));
    }
    get inputPassword () {
        return $(('input[name="password"]'));
    }
    get inputConfirmPassword () {
        return $(('input[name="password_confirmation"]'));
    }

    get btnSubmit () {
        return $("button[id='send2']");
    }


    async clickOnCreateAccount() {
        await $('//a[contains(text(), "Create an Account")]').click();
      }

    async register (firstName, lastName, email, password, confPassword) {
        await expect(this.inputFirstname).toBeDisplayed();
        await this.inputFirstname.setValue(firstName);
        await expect(this.inputLastname).toBeDisplayed()
        await this.inputLastname.setValue(lastName);
        await expect(this.inputEmail).toBeDisplayed();
        await this.inputEmail.setValue(email);
        await expect(this.inputPassword).toBeDisplayed();
        await this.inputPassword.setValue(password);
        await expect(this.inputConfirmPassword).toBeDisplayed();
        await this.inputConfirmPassword.setValue(confPassword);
        await this.btnSubmit.scrollIntoView();
        await this.btnSubmit.click();
    
    }
}

module.exports = new RegisterPage();