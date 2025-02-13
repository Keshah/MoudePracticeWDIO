const BasePage = require('../core/base.page');

class CartPage extends BasePage {

    async addToCart() {
        const addToCartButtons = await $$('button.action.tocart.primary');
        const firstAddToCartButton = addToCartButtons[0];
        await firstAddToCartButton.waitForDisplayed({ timeout: 10000 });
        await firstAddToCartButton.click();
    }


    async proceedToCart() {
        const cartBtn = await $('a[href="https://www.htfr.com/checkout/cart/"]');
        await cartBtn.waitForDisplayed({ timeout: 10000 });
        await cartBtn.click();
        const editCartBtn = await $("//span[text()='View and Edit Cart']");
        if (!(await editCartBtn.isExisting())) {
            throw new Error("The cart is empty and you can't proceed to it");
        }
        await editCartBtn.waitForDisplayed({ timeout: 10000 });
        await editCartBtn.click();
    }

    async isItemInCart() {
        const cartItem = await $('tbody.cart.item');
        return await cartItem.isDisplayed();
    }

    async deleteCartItem() {
        await browser.execute(() => {
            const removeBtn = document.querySelector('a.action.action-delete');
            if (removeBtn) {
                removeBtn.click();
            }
        });
    }
}

module.exports = new CartPage();