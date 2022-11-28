const { Navigation } = require('../pageobjects/navigation.po');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Navigation {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#loginFrm_loginname');
    }

    get inputPassword () {
        return $('#loginFrm_password');
    }

    get submitButton() {
        return $('button[title="Login"]');
    }

    get continueButton() {
        return $('button[title="Continue"]');
    }

    get alertMessage() {
        return $('.alert.alert-error.alert-danger');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.submitButton.click();
    }

    async createUser () {
        await this.continueButton.click();
    }

}

module.exports = {LoginPage: new LoginPage()};
