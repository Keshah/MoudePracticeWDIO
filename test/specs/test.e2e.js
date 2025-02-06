import chai from 'chai';
import CartPage from '../pageobjects/Cart.page';
import filterPage from '../pageobjects/filter.page';
import checkoutPage from '../pageobjects/checkout.page';
import { expect } from 'chai';
const { browser } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const RegisterPage = require('../pageobjects/register.page')
const EditUser = require('../pageobjects/profile.page')
const BoardPage = require('../pageobjects/Cart.page')
const SearchPage = require('../pageobjects/search.page')
const MainPage = require('../pageobjects/page')
const listPage = require('../pageobjects/list.page')
const CreateCardPage = require('../pageobjects/checkout.page')
const WorkspacePage = require('../pageobjects/filter.page')

//    describe('1. Sign up for HTFR', () => {
//        it('should register with valid credentials', async () => {
//            await MainPage.open()
//            await RegisterPage.clickOnCreateAccount()
//            await RegisterPage.register("Name", "LastName", "keshah719@gmail.com", "Password2222", "Password2222") //need to change email to a random one after each run
//            await browser.pause(5000)
//        })
//    })
//
//  describe('2. Sign in to HTFR', () => {
//      it('should login with valid credentials', async () => {
//          await MainPage.open();
//          await LoginPage.clickOnLogIn();
//          await LoginPage.login("keshah717@gmail.com", "Password2222");
//          const isDisplayed = await $('li[class="greet welcome"]').isDisplayed();
//          assert.isTrue(isDisplayed, 'Element is visible after Log In');                  // chai.assert
//          await browser.pause(5000)
//      });
//  })

// describe('3. Edit user profile', () => {
//      it('should edit the profule first name', async () => {
//          await MainPage.open()
//          await LoginPage.clickOnLogIn()
//          await LoginPage.login("keshah717@gmail.com", "Password2222")
//          await EditUser.GoToSettings()
//          await EditUser.ChangeName("testName2") // better to change after each run
//          await browser.pause(5000)
//      })
//  })

// describe('4. Add a Product to the Cart', () => {
//   it('should log in and proceed to the cart successfully', async () => {
//       await MainPage.open();
//       await LoginPage.clickOnLogIn();
//       await LoginPage.login("keshah717@gmail.com", "Password2222");
//       await CartPage.AddToCart();
//       await CartPage.ProceedToCart();
//       await browser.pause(2000);
//       const isItemAdded = await CartPage.isItemInCart();
//       expect(isItemAdded).to.be.true;                                              // chai.expect
//   });
// });

 describe('5. Search for a product', () => {
         it('should search an item by input', async () => {
             await MainPage.open()
             await LoginPage.clickOnLogIn()
             await LoginPage.login("keshah717@gmail.com", "Password2222")
             await SearchPage.setSearchInput("vinyl")
             const searchInputValue = await SearchPage.getSearchInputValue();         
             searchInputValue.should.equal('vinyl');                                  // chai.should to check entered value
             await SearchPage.pressEnter()
             await browser.pause(5000)
         })
     })
// describe('6. Remove an Item from the Cart', () => {
//         it('should remove an item from the cart', async () => {
//             await MainPage.open()
//             await LoginPage.clickOnLogIn()
//             await LoginPage.login("keshah717@gmail.com", "Password2222")
//             await CartPage.AddToCart()
//             await CartPage.ProceedToCart()
//             await CartPage.DeleteCartItem()
//             await browser.pause(5000)
//         })
//     })

 // describe('7. Check filter by genre', () => {
 //           it('should search certain genre', async () => {
 //               await MainPage.open()
 //               await filterPage.goToFilters()
 //               await filterPage.filterByGenre("Disco")
 //               await browser.pause(5000)
 //           })
 //       }) 

// describe('8. Proceed to Checkout', () => {
//         it('should proceed to the checkout page', async () => {
//             await MainPage.open()
//             await LoginPage.clickOnLogIn()
//             await LoginPage.login("keshah717@gmail.com", "Password2222")
//             await CartPage.AddToCart()
//             await CartPage.ProceedToCart()
//             await checkoutPage.ProceedToCheckout()
//             await browser.pause(5000)
//         })
//     })