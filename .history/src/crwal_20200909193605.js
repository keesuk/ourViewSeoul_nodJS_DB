var webdriver = require('selenium-webdriver');

async function crwal(csvData) {
    var data = csvData;
    var driver = new webdriver.Builder().forBrowser('chrome').build();
    try {
        for(var i = 0; i < data.length; i++) {
            await driver.get('http://map.naver.com/v5/').then(function() {
            await driver.findElement(By.css('input.input_search')).sendKeys('webdriver', Key.RETURN);
            
            for(var j= 0; j < 20; j++){
            await sleep(1000)
            var iframe = driver.switchTo().frame(element(by.ID('searchIfrmae')).getWebElement());

            }
            })
        }
    } finally {
        await driver.quit();
    }
}

module.exports = crwal;