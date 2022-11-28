const { Given, When, Then } = require('@wdio/cucumber-framework');


When('I open url {string}', async function (url) {
    await browser.maximizeWindow();
    await browser.url(url);
});

Then('I expect elements attributes:', async function (table) {
    const data = table.hashes();
    for (const el of data) {

        const attr = await $(el.element).getAttribute(el.attribute);
        await expect(el.value).toEqual(attr);
        console.log(await el);
    }
});