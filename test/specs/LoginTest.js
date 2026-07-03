const Actions = require("../../common/actions")
const Assertions = require("../../common/assertions")
const HomePage = require("../pageobjects/HomePage")
const ProductsPage = require("../pageobjects/ProductsPage")
const allure = require("@wdio/allure-reporter").default

describe("Parcours Login SauceLab", () => {

    beforeEach("Setup", async function () {
        await driver.activateApp("com.swaglabsmobileapp");

    })
    afterEach("TearDown", async function () {
        if (this.currentTest.state == "failed") {
            await browser.saveScreenshot(`./errorShots/${this.currentTest.title}.png`)

        }
        await driver.terminateApp("com.swaglabsmobileapp");
    })
    it("[smoke][home]Login Valid", async () => {
        await allure.step("step1:Login identifiants Valids", async () => {
            // cliquer sur le bouton 
            await Actions.SetValue(HomePage.Username, "standard_user")
            await Actions.SetValue(HomePage.Password, "secret_sauce")
            await Actions.Click(HomePage.LgnBtn)
            await Assertions.assertElementTextEquals(ProductsPage.GetProdText, "PRODUCTS")
        })
    })
    it("[smoke][home]Login Invalid", async () => {
        await allure.step("step1:Login identifiants Invalids", async () => {
            // cliquer sur le bouton 
            await Actions.SetValue(HomePage.Username, "WrongUser")
            await Actions.SetValue(HomePage.Password, "WrongPass")
            await Actions.Click(HomePage.LgnBtn)
            await Assertions.assertElementIsDisplayed(HomePage.ErrorMsg)
        })
    })

})
