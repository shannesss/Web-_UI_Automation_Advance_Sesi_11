const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

describe('Automation Test - Fitur Login', function () {
    let driver;
    const BASE_URL = 'https://www.saucedemo.com/';

    this.timeout(30000);

    // // ==================== 4 HOOKS ====================

    // before(async function () {
    //     console.log("[HOOK 1 - before] Inisialisasi WebDriver Chrome...");
    //     driver = await new Builder().forBrowser('chrome').build();
    //     await driver.manage().window().maximize();
    // });

    // beforeEach(async function () {
    //     console.log("[HOOK 2 - beforeEach] Membuka URL aplikasi sebelum test berjalan...");
    //     await driver.get(BASE_URL);
    // });


    // afterEach(async function () {
    //     console.log("[HOOK 3 - afterEach] Membersihkan cookies setelah skenario test selesai...");
    //     try {
    //         await driver.manage().deleteAllCookies();
    //     } catch (e) {
    //         // Mengabaikan error jika driver sedang tidak aktif
    //     }
    // });

 
    // after(async function () {
    //     console.log("[HOOK 4 - after] Menutup browser dan mengakhiri sesi pengujian...");
    //     if (driver) {
    //         await driver.quit();
    //     }
    // });

    // // TEST

    // it('1. Gagal login dengan password salah (Negative Test)', async function () {
    //     console.log('-> Menjalankan Test: Gagal login dengan password salah');
        
    //     const usernameInput = await driver.wait(until.elementLocated(By.css("input[data-testid='username-input']")), 10000);
    //     await usernameInput.sendKeys('admin');

    //     const passwordInput = await driver.findElement(By.css("input[data-testid='password-input']"));
    //     await passwordInput.sendKeys('salah_password');

    //     const signinButton = await driver.findElement(By.css("button[data-testid='login-button']"));
    //     await signinButton.click();

    //     const errorMessage = await driver.wait(async function() {
    //         let el = await driver.findElement(By.css("p.error"));
    //         let text = await el.getText();
    //         return text.trim().length > 0 ? el : null;
    //     }, 10000);

    //     const errorText = await errorMessage.getText();
    //     assert.notStrictEqual(errorText, '', "Pesan error harus muncul ketika password salah");
    // });

    // it('2. Gagal login dengan username tidak terdaftar (Negative Test)', async function () {
    //     console.log('-> Menjalankan Test: Gagal login dengan username tidak terdaftar');
        
    //     const usernameInput = await driver.wait(until.elementLocated(By.css("input[data-testid='username-input']")), 10000);
    //     await usernameInput.sendKeys('user_palsu_123');

    //     const passwordInput = await driver.findElement(By.css("input[data-testid='password-input']"));
    //     await passwordInput.sendKeys('admin');

    //     const signinButton = await driver.findElement(By.css("button[data-testid='login-button']"));
    //     await signinButton.click();

    //     const errorMessage = await driver.wait(async function() {
    //         let el = await driver.findElement(By.css("p.error"));
    //         let text = await el.getText();
    //         return text.trim().length > 0 ? el : null;
    //     }, 10000);

    //     assert.ok(errorMessage, "Pesan error harus muncul untuk username yang tidak terdaftar");
    // });

    // it('3. Gagal login dengan kolom kosong / blank fields (Negative Test)', async function () {
    //     console.log('-> Menjalankan Test: Gagal login dengan kolom kosong');
        
    //     const signinButton = await driver.wait(until.elementLocated(By.css("button[data-testid='login-button']")), 10000);
    //     await signinButton.click();

    //     assert.ok(signinButton, "Tombol login tetap berada di halaman karena validasi form kosong");
    // });

    // it('4. Berhasil login dengan kredensial valid (Positive Test)', async function () {
    //     console.log('-> Menjalankan Test: Berhasil login dengan kredensial valid');
        
    //     const usernameInput = await driver.wait(until.elementLocated(By.css("input[data-testid='username-input']")), 10000);
    //     await usernameInput.clear();
    //     await usernameInput.sendKeys('admin'); 

    //     const passwordInput = await driver.findElement(By.css("input[data-testid='password-input']"));
    //     await passwordInput.clear();
    //     await passwordInput.sendKeys('admin'); 

    //     const signinButton = await driver.findElement(By.css("button[data-testid='login-button']"));
    //     await signinButton.click();

    //     const logoutButton = await driver.wait(
    //         until.elementLocated(By.id('logout-btn')), 
    //         15000, 
    //         "Gagal masuk ke dashboard, tombol logout tidak ditemukan"
    //     );

    //     assert.ok(logoutButton, "Tombol logout harus tampil setelah berhasil login");
    // });
});