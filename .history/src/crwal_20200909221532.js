const { Builder, By, Key, until, webdriver } = require('selenium-webdriver');
const sleep = ms => new Promise(res => setTimeout(res, ms));

async function crwal(data) {
    var driver = new Builder().forBrowser('chrome').build();

    for(var i = 0; i < data.length; i++) {
        await driver.get('http://map.naver.com/v5/')
        await sleep(2000);
        for(var j = 0; j < 20; j++) {
            await driver.findElement(By.css('input.input_search')).sendKeys(data[i].korCor + '역', Key.RETURN);
            await driver.manage().window().setRect({ width: 1024, height: 768 });
            await sleep(2000);
            await driver.switchTo().frame(element(By.id('searchIfrmae')).getWebElement());
            var name = driver.findElement(By.css('span.es3Ot')[j].text);
            console.log(name)
        }
    }
}


module.exports = crwal;

