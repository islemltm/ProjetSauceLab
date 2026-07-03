class actions {
    //definir la ction click
    async Click(element) {
        await element.waitForDisplayed({ timeout: 120000 })
        await element.click()
    }
    async SetValue(element, value) {
        await element.waitForDisplayed({ timeout: 120000 })
        await element.clearValue()        // nettoyer le champ avant saisir
        await element.setValue(value)

    }
    async KeyEnter(element) {
        await element.waitForDisplayed({ timeout: 120000 })
        element.KeyEnter()  // quand on clique entrer sur le clavier
    }

}
module.exports = new actions()
