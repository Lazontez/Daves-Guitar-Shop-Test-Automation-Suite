class HomePage{
    constructor(page){
        this.page = page
        // This will be multiple items. Currently it will return the 15 'Just In' Items found on home page
        this.justInItems = page.locator('.grid-product__content') 
    }


}

module.exports = {HomePage}