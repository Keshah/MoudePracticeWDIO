class BasePage {
    async open(path) {
        await browser.url(path);
    }

    async click(element) {
        await element.waitForClickable();
        await element.click();
    }

    async typeText(element, text) {
        await element.waitForDisplayed();
        await element.setValue(text);
    }

    async isElementDisplayed(element) {
        await element.waitForDisplayed();
        return element.isDisplayed();
    }
}

module.exports = BasePage;