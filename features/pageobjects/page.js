const { Data } = require ('../pageobjects/data')


class Page {

    // components

    get mainText() {
        return $('.maintext');
    }

    get addToCartButton() {
        return $('li > .cart');
    }

    get logo() {
        return $('.logo');
    }
    
    // actions
    openMainPage () {
        return browser.url(Data.url);
    }

}

module.exports = { Page };
