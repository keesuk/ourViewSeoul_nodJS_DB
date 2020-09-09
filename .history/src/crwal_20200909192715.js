var webdriver = require('selenium-webdriver');
var csvData;

async function crwal() {
    var driver = new webdriver.Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://map.naver.com/v5/').then(function() {
        await driver.findElement(By.css('input.input_search')).sendKeys('webdriver', Key.RETURN);
        await driver.wait(until.)
    })
    } finally {
        await driver.quit();
    }
}

module.exports = crwal;