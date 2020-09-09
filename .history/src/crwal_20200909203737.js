const webdriver = require('selenium-webdriver');
const sleep = ms => new Promise(res => setTimeout(res, ms));

async function crwal(csvData) {
    var data = csvData;
    var driver = new webdriver.Builder().forBrowser('chrome').build();

    for(var i = 0; i < data.length; i++) {
        driver.get('http://map.naver.com/v5/')
        await sleep(2000);
        driver.findElement(webdriver.By.css('#input_search1599651409660'))
        driver.sendKeys(data[i].korCor, Key.RETURN);}
}


module.exports = crwal;

// var iframe = driver.switchTo().frame(element(by.ID('searchIfrmae')).getWebElement());