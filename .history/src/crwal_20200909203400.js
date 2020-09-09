const webdriver = require('selenium-webdriver');
const sleep = require('sleep');

async function crwal(csvData) {
    var data = csvData;
    var driver = new webdriver.Builder().forBrowser('chrome').build();
    await sleep(2000);

    for(var i = 0; i < data.length; i++) {
        driver.get('http://map.naver.com/v5/')
        driver.findElement(webdriver.By.css('input.input_search'))
        driver.sendKeys(data[i].korCor, Key.RETURN);}
}


module.exports = crwal;

// var iframe = driver.switchTo().frame(element(by.ID('searchIfrmae')).getWebElement());