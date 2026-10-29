const { Builder } = require("selenium-webdriver");
const LoginPage = require("../page/login.page");
const assert = require("assert");
const fs = require("fs");

// Memanggil helper visual regression yang sudah dibuat di folder utilities
const { takeVisualTest } = require('../../utilities/visual_regression.helper');

describe("Saucedemo Login Automation Test", function () {
    let driver;
    let loginPage;

    // Atur timeout Mocha agar tidak mudah timeout (30 detik)
    this.timeout(30000);

    beforeEach(async function () {
        driver = await new Builder().forBrowser("chrome").build();
        await driver.manage().window().maximize();
        loginPage = new LoginPage(driver);
    });

    afterEach(async function () {
        if (driver) {
            await driver.quit();
        }
    });

    // 1. Test Case Positif: Login Success
    it("Test Case Positive: should login successfully with valid credentials", async function () {
        await loginPage.openBrowser();
        await loginPage.login("standard_user", "secret_sauce");

        const title = await loginPage.getProductsTitle();
        assert.strictEqual(title, "Products", "Login gagal, halaman produk tidak tampil!");

        // Visual Regression screenshot menggunakan helper
        await takeVisualTest(driver, "login_success");
    });

    // 2. Test Case Negatif: Invalid Username / Wrong Password
    it("Test Case Negative: should show error with invalid credentials", async function () {
        await loginPage.openBrowser();
        await loginPage.login("invalid_user", "wrong_password");

        const errorText = await loginPage.getErrorMessage();
        assert(errorText.includes("Epic sadface"), `Pesan error tidak sesuai: ${errorText}`);

        await takeVisualTest(driver, "invalid_credentials");
    });

    // 3. Test Case Negatif: Locked Out User
    it("Test Case Negative: should show error for locked_out_user", async function () {
        await loginPage.openBrowser();
        await loginPage.login("locked_out_user", "secret_sauce");

        const errorText = await loginPage.getErrorMessage();
        assert(errorText.includes("Sorry, this user has been locked out"), `Pesan error tidak sesuai: ${errorText}`);

        await takeVisualTest(driver, "locked_out_user");
    });
});