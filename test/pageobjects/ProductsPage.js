const ProdElements = require("../../elements/Products")
class ProductsPage {
    get GetProdText() {
        return $(ProdElements.ProductsText)
    }
}
module.exports = new ProductsPage()
