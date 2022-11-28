const { Navigation } = require('../pageobjects/navigation.po');
const { Data } = require ('../pageobjects/data');
const { LoginPage } = require('./login.page');


class Registration extends Navigation {
    // components

    // get header() {
    //     return new LoginPage();
    // }

    get firstName() {
        return $('#AccountFrm_firstname');
    }

    get lastName() {
        return $('#AccountFrm_lastname');
    }

    get email() {
        return $('#AccountFrm_email');
    }

    get phone() {
        return $('#AccountFrm_telephone');
    }

    get fax() {
        return $('#AccountFrm_fax')
    }

    get company() {
        return $('#AccountFrm_company')
    }

    get address1() {
        return $('#AccountFrm_address_1')
    }

    get address2() {
        return $('#AccountFrm_address_2')
    }

    get city() {
        return $('#AccountFrm_city')
    }

    get regionState() {
        return $('#AccountFrm_zone_id')
    }

    get zipCode() {
        return $('#AccountFrm_postcode')
    }

    get country() {
        return $('#AccountFrm_country_id')
    }

    get loginName() {
        return $('#AccountFrm_loginname')
    }

    get password() {
        return $('#AccountFrm_password')
    }

    get passwordConfirm() {
        return $('#AccountFrm_confirm')
    }

    get agreement() {
        return $('#AccountFrm_agree')
    }

    get continueButton() {
        return $('button[title="Continue"]')
    }

    get subscribeYesRadioButton() {
        return $('#AccountFrm_newsletter1');
    }

    get subscribeNoRadioButton() {
        return $('#AccountFrm_newsletter0');
    }

    // New York
    get optionState() {
        return $('//*[@id="AccountFrm_zone_id"]/option[44]');
    }

    get optionCountry() {
        return $('//*[@id="AccountFrm_country_id"]/option[225]');
    }
    
    // actions
    async registration(...arg) { 
        let userData; 
        if (arg[0] !== null) {
            userData = arg[0];
        }
        else if (arg[0] === null) {
            userData = Data.registerData;  
        } 

        await this.firstName.setValue(userData.firstName);
        await this.lastName.setValue(userData.lastName);
        await this.email.setValue(userData.email);

        await this.address1.setValue(userData.address1);
        await this.city.setValue(userData.city);
        await this.regionState.click()
        await this.optionState.click();
        await this.zipCode.setValue(userData.zip);

        await this.loginName.setValue(userData.loginName);
        await this.password.setValue(userData.password);
        await this.passwordConfirm.setValue(userData.password)
        await this.agreement.click()

        await this.continueButton.click();
        await browser.pause(5000);

        const credentials = {name : userData.loginName, password : userData.password}
        this.credentials = credentials;
    }

    async registrationCheck(){
        await browser.deleteCookies();
        await LoginPage.openMainPage();
        await LoginPage.goToLoginRegister();   
        await LoginPage.login(this.credentials.name, this.credentials.password);
    }

}

module.exports = { Registration: new Registration() };
