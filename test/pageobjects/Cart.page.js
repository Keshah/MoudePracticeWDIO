const { $, expect } = require('@wdio/globals')

class BoardPage {

    get inputBoardName () {
        return $(('input[data-testid="create-board-title-input"]'));
    }


    async AddToCart() {
        const firstAddToCartButton = await $$('button.action.tocart.primary')[0];
        await expect(firstAddToCartButton).toBeDisplayed();
        await firstAddToCartButton.click();
      }
    
    async ProceedToCart() {
        const cartBtn = await $('a[href="https://www.htfr.com/checkout/cart/"]');
        await expect(cartBtn).toBeDisplayed();
        await cartBtn.click()
        await browser.pause(5000)
        const EditCartBtn = await $("//span[text()='View and Edit Cart']");

        if (!(await EditCartBtn.isExisting())) {
            throw new Error("The cart is empty and you can't proceed to it");
        }
        
        await EditCartBtn.waitForDisplayed();
        await EditCartBtn.click();
    }
      
    async DeleteCartItem() {
        await browser.execute(function() {
            const removeBtn = document.querySelector('a.action.action-delete');
            if (removeBtn) {
                removeBtn.click();
            }
        });
    
        //if (deleteBtns.length > 0) {
        //    await deleteBtns[0].scrollIntoView();  // Прокручиваем страницу до элемента
        //    await deleteBtns[0].waitForClickable({ timeout: 5000 });  // Ждем, пока элемент станет кликабельным
        //    await deleteBtns[0].click();  // Кликаем по первому элементу
        //} else {
        //    console.log('Кнопка удаления не найдена.');
        //}
    }
        //await deleteBtn.scrollIntoView();
        //await deleteBtn.waitForExist({ timeout: 5000 });
        //await deleteBtn.waitForDisplayed({ timeout: 5000 });
        //await deleteBtn.click();
    }
    
    
module.exports = new BoardPage();