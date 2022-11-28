const { Page } = require('../pageobjects/page');


class Items extends Page {
    // components
    get items() {
        return $$('.prdocutname');
    }

    get item1() {
        return $$('.prdocutname')[0];
    }

    get item2() {
        return $$('.prdocutname')[2];
    }

    get shortLinkAddToShopingCart() {
        return $$('.shortlinks');
    }

    // actions
    async addToShopingCart(...args) {

        for(const elem of args) {

            await elem.click();
            await this.addToCartButton.click();

            await this.logo.click()
        }
    }

}

module.exports = { Items: new Items() };