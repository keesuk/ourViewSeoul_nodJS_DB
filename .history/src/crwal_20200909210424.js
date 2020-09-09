const { Builder, By, Key, until, webdriver } = require('selenium-webdriver');
const sleep = ms => new Promise(res => setTimeout(res, ms));

async function crwal(data) {
    var driver = new Builder().forBrowser('chrome').build();

    for(var i = 0; i < data.length; i++) {
        await driver.get('http://map.naver.com/v5/')
        await sleep(2000);
        await driver.findElement(By.css('input.input_search')).sendKeys(data[i].korCor, Key.RETURN);
        console.log(data[i].korCor)
    }
}


module.exports = crwal;

// var iframe = driver.switchTo().frame(element(by.ID('searchIfrmae')).getWebElement());