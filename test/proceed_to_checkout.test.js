const MainPage = require('../business/main.page');
const LoginPage = require('../business/login.page');
const CartPage = require('../business/cart.page');
const CheckoutPage = require('../business/checkout.page');

describe('8. Proceed to Checkout', () => {
  it('should proceed to the checkout page', async () => {
    await MainPage.open();
    await LoginPage.clickOnLogIn();
    await LoginPage.login("keshah717@gmail.com", "Password2222");
    await browser.pause(3000);
    await CartPage.addToCart();
    await browser.pause(3000);
    await CartPage.proceedToCart();
    await browser.pause(3000);
    await CheckoutPage.proceedToCheckout();
    await browser.pause(5000);
  });
});