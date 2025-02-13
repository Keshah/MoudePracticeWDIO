const MainPage = require('../business/main.page');
const LoginPage = require('../business/login.page');
const CartPage = require('../business/cart.page');

describe('6. Remove an Item from the Cart', () => {
  it('should remove an item from the cart', async () => {
    // I had to add a lot of browser.pause because firefox is slow to process, chrome handles the tests without pausing
    await MainPage.open();
    await LoginPage.clickOnLogIn();
    await LoginPage.login("keshah717@gmail.com", "Password2222");
    await browser.pause(3000);
    await CartPage.addToCart();
    await browser.pause(3000);
    await CartPage.proceedToCart();
    await CartPage.deleteCartItem();
    await browser.pause(5000);
  });
});