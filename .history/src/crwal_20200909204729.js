const webdriver = require('selenium-webdriver');
const sleep = ms => new Promise(res => setTimeout(res, ms));

async function crwal(csvData) {
    var data = csvData;
    var driver = new webdriver.Builder().forBrowser('chrome').build();

    for(var i = 0; i < data.length; i++) {
        driver.get('http://map.naver.com/v5/')
        await sleep(2000);
        (await driver.findElement(webdriver.By.cssSelector('input_search1599651814518'))).click()
    }
}


module.exports = crwal;

// var iframe = driver.switchTo().frame(element(by.ID('searchIfrmae')).getWebElement());