// const { Until, By } = require("selenium-webdriver");
// const loginLocator = require("../locators/login.locator");
// const assert = require("assert");

// class LoginPage {
//     constructor(driver) {
//         this.driver = driver;
//     }

//     async openBrowser() {
//         await this.driver.get(loginLocator.url);
//         await this.driver.wait(async () => {
//             const url = await this.driver.getCurrentUrl();
//             return url === loginLocator.url;
//         });
//     }
// }
const { until, By } = require("selenium-webdriver");
const loginLocator = require("../locators/login.locator");
const assert = require("assert");

class LoginPage {
    constructor(driver) {
        this.driver = driver;
    }

    async openBrowser() {
        await this.driver.get(loginLocator.url);
        await this.driver.wait(async () => {
            const url = await this.driver.getCurrentUrl();
            return url === loginLocator.url;
        });
    }

    async inputUsername(username) {
        const usernameField = await this.driver.wait(
            until.elementLocated(By.css(loginLocator.usernameInput)), 5000
        );
        await usernameField.clear();
        await usernameField.sendKeys(username);
    }

    async inputPassword(password) {
        const passwordField = await this.driver.wait(
            until.elementLocated(By.css(loginLocator.passwordInput)), 5000
        );
        await passwordField.clear();
        await passwordField.sendKeys(password);
    }

    async clickLoginButton() {
        const loginBtn = await this.driver.wait(
            until.elementLocated(By.css(loginLocator.loginButton)), 5000
        );
        await loginBtn.click();
    }

    async login(username, password) {
        await this.inputUsername(username);
        await this.inputPassword(password);
        await this.clickLoginButton();
    }

    async getErrorMessage() {
        const errorElem = await this.driver.wait(
            until.elementLocated(By.css(loginLocator.errorMessage)), 5000
        );
        return await errorElem.getText();
    }

    async getProductsTitle() {
        const titleElem = await this.driver.wait(
            until.elementLocated(By.css(loginLocator.productsTitle)), 5000
        );
        return await titleElem.getText();
    }
}

module.exports = LoginPage;