const { assert } = require("chai");
const MainPage = require("../business/main.page");
const LoginPage = require("../business/login.page");

describe("2. Sign in to HTFR", () => {
    it("should login with valid credentials", async () => {
        await MainPage.open();
        await LoginPage.clickOnLogIn();
        await LoginPage.login("keshah717@gmail.com", "Password2222");

        assert.isTrue(await LoginPage.isLoginSuccessful(), "User should be logged in");
    });
});