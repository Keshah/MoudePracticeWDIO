const MainPage = require("../business/main.page");
const RegisterPage = require("../business/register.page");

describe("1. Sign up for HTFR", () => {
  it("should register with valid credentials", async () => {
    await MainPage.open();
    await RegisterPage.clickOnCreateAccount();
    const randomEmail = `user${Date.now()}@example.com`;
    await RegisterPage.register(
      "Name",
      "LastName",
      randomEmail,
      "Password2222",
      "Password2222",
    );
    await browser.pause(5000);
  });
});
