const BasePage = require("../core/base.page");
const { $, expect } = require("@wdio/globals");

class CheckoutPage extends BasePage {
  async proceedToCheckout() {
    const checkoutButton = $('button[data-role="proceed-to-checkout"]');
    await checkoutButton.waitForDisplayed({ timeout: 10000 });
    await expect(checkoutButton).toBeDisplayed();
    await checkoutButton.click();

    const orderSummaryTitle = $("span.title=Order Summary");
    await orderSummaryTitle.waitForDisplayed({ timeout: 10000 });
    await expect(orderSummaryTitle).toBeDisplayed();
  }
}

module.exports = new CheckoutPage();
