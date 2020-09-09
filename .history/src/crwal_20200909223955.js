const { Builder, By, Key, until, webdriver } = require('selenium-webdriver');
const sleep = ms => new Promise(res => setTimeout(res, ms));
const fs = require('fs');

async function crwal(data) {
    var driver = new Builder().forBrowser('chrome').build();

    for(var i = 0; i < data.length; i++) {
        await driver.get('http://map.naver.com/v5/')
        await sleep(3000);
        for(var j = 0; j < 20; j++) {
            await driver.findElement(By.css('input.input_search')).sendKeys(data[i].korCor + '역', Key.RETURN);
            await driver.manage().window().setRect({ width: 1024, height: 768 });
            await sleep(2000);
            const iframe = await driver.findElement(By.id('searchIframe'))
            await sleep(1000);
            await driver.switchTo().frame(iframe);
            await sleep(5000);
            var name = await driver.findElement(By.css('span.es3Ot'));
            console.log(name.getText())




            await driver.switchTo().defaultContent();
        }
    }
}


module.exports = crwal;

// 스크린샷
//    let ele = await driver.findElement(By.css("h1"));
//    let encodedString = await ele.takeScreenshot(true);

// let encodedString = driver.takeScreenshot();
// await fs.writeFileSync('./image.png', encodedString, 'base64');
// await driver.quit();