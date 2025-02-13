const { expect } = require('chai');
const MainPage = require('../business/main.page');
const LoginPage = require('../business/login.page');
const CartPage = require('../business/cart.page');

describe('4. Add a Product to the Cart', () => {
    it('should log in and proceed to the cart successfully', async () => {
        // I had to add a lot of browser.pause because firefox is slow to process, chrome handles the tests without pausing
        await MainPage.open();
        await LoginPage.clickOnLogIn();
        await LoginPage.login("keshah717@gmail.com", "Password2222");
        await browser.pause(3000);
        await CartPage.addToCart();
        await browser.pause(3000);
        await CartPage.proceedToCart();
        await browser.pause(3000);
        const isItemAdded = await CartPage.isItemInCart();
        expect(isItemAdded).to.be.true;
    });
});