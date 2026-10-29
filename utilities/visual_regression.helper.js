const fs = require('fs');
const path = require('path');

async function takeVisualTest(driver, testName) {
    // Pastikan folder 'screens' atau 'screenshots' ada
    const dir = './screens';
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true });
    }

    // Ambil screenshot dalam format base64
    const screenshot = await driver.takeScreenshot();
    const filePath = path.join(dir, `${testName}-${Date.now()}.png`);
    
    // Simpan file gambar ke disk
    fs.writeFileSync(filePath, screenshot, 'base64');
    console.log(`[Visual Regression] Screenshot disimpan di: ${filePath}`);
}

module.exports = { takeVisualTest };