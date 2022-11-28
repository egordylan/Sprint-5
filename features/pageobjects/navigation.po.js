const { Page } = require('../pageobjects/page');


class Navigation extends Page{
    // components of the side bar
    get main() {
        return $('.navbar-collapse.collapse');
    }

    get loginRegister() {
        return this.main.$('#customer_menu_top > li > a');
    }

    get cspecials() {
        return this.main.$('#main_menu_top > [data-id="menu_specials"]');
    }

    get account() {
        return this.main.$('#main_menu_top > [data-id="menu_account"]');
    }

    get cart() {
        return this.main.$('#main_menu_top > [data-id="menu_cart"]');
    }

    get checkout() {
        return this.main.$('#main_menu_top > [data-id="menu_checkout"]');
    }

    get searchBar () {
        return this.main.$('#filter_keyword.pull-left.input-medium.search-query.dropdown-toggle');
    }

    get goSearchButton () {
        return this.main.$('.button-in-search');
    }

    get searchCathegory () {
        return this.main.$$('.search-category');
    }

    get searchResultArray () {
        return this.main.$$('.fixed_wrapper');
    }

    // actions
    async goToLoginRegister() {
        await (await this.loginRegister).click();
    }
}

module.exports = { Navigation };
