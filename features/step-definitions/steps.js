const { Given, When, Then } = require('@wdio/cucumber-framework');
const { LoginPage } = require('../pageobjects/login.page');
const { Registration } = require('../pageobjects/registration.po');
const { Items } = require('../pageobjects/items.po');
const { Cart } = require('../pageobjects/cart.po');
const YAML = require('yaml');


When(/^I login with "([^"]*)" and "([^"]*)"$/, async function (username, password) {
    await LoginPage.login(username, password);
});

Then(/^I should see a flash message saying (.*)$/, async function (message) {
    await expect(LoginPage.alertMessage).toBeExisting();
    await expect(LoginPage.alertMessage).toHaveTextContaining(message);
});


Given("I go to the Main page", async function () {
    await browser.maximizeWindow();
    await LoginPage.openMainPage();
});

Then("I go to Login-Register page", async function () {
    await LoginPage.goToLoginRegister();

    const title = await browser.getTitle();
    console.log("TITLE :::", title);
    expect (await title).toEqual("Account Login");
});

When("Click the Continue button to make new user", async function () {
    await LoginPage.createUser();

    const title = await browser.getTitle();
    console.log("TITLE 2 :::", title);
    expect (await title).toEqual("Create Account");
});


Then("I create new user with data:", async function (formYaml) {
    const data = YAML.parse(formYaml);
    console.log("TABLE ---> ", { data });
    await Registration.registration(data);

    const title = await browser.getTitle();
    console.log("TITLE :::", title);
    expect(await title).toEqual("Your Account Has Been Created!");
});

Then("I create new user", async function () {
    await Registration.registration(null);
});

Then("Check registration", async function () {
    await Registration.registrationCheck();
    expect (await Registration.mainText.getText()).toEqual('MY ACCOUNT');
});

When('I add some goods to the shoping cart', async function () {
    await Items.addToShopingCart(Items.item1, Items.item2);
});

Then('I check shopping card item image:', async function (table) {
    await browser.logToViewport();

    const data = JSON.parse(table);
    console.log('DATA +++ ', data);

    await LoginPage.cart.click();
    
    const imagesList = await Cart.cartImages;
    console.log('imagesList +++ ', imagesList);
    
    for (const elem of data) {

        const indx = data.indexOf(elem);
        console.log('ELEMENT +++ ', elem);
        console.log('indx +++ ', indx);

        for (const el in elem) {
            console.log('EL === ', el);
            console.log('imagesList[indx] === ', imagesList[indx]);

            const attriubute = await imagesList[indx].getAttribute(el);
            const value = elem[el];
            console.log('attriubute === ', attriubute);
            await expect(attriubute).toEqual(value) ;           
        }
    } 

});