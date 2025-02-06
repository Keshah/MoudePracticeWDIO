const { $, expect } = require('@wdio/globals')

class CheckoutPage {
    async ProceedToCheckout(){
      await expect($('button[data-role="proceed-to-checkout"]')).toBeDisplayed()
      await $('button[data-role="proceed-to-checkout"]').click()
      await expect($('span.title=Order Summary')).toBeDisplayed()
    }
  }

module.exports = new CheckoutPage();