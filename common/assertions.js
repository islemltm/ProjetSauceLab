const { expect } = require("@wdio/globals")


module.exports = {
    async assertElementTextEquals(element, expectedText) {
        await element.waitForDisplayed({ timeout: 120000 })
        const actuelText = await element.getText()
        expect(actuelText).toEqual(expectedText)
    },

    async assertElementIsDisplayed(element) {
        await element.waitForDisplayed({ timeout: 120000 })
        const isDisplayed = await element.isDisplayed()
        expect(isDisplayed).toBe(true)
    }
}
