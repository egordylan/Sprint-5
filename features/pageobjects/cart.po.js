const { Page } = require('./page');


class Cart extends Page {

    // elements

    get cartTable(){
        return $('.product-list > table');
    }
    get cartImages(){
        return $$('.product-list > table img');
    }

}

module.exports = { Cart : new Cart() };