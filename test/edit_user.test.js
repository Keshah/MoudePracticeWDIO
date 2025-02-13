const MainPage = require("../business/main.page");
const LoginPage = require("../business/login.page");
const ProfilePage = require("../business/profile.page");

describe("3. Edit user profile", () => {
    it("should edit the profile first name", async () => {
        await MainPage.open();
        await LoginPage.clickOnLogIn();
        await LoginPage.login("keshah717@gmail.com", "Password2222");
        await ProfilePage.goToSettings();
        await ProfilePage.changeName("testName2");
    });
});