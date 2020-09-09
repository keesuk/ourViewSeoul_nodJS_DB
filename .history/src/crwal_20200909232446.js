const { Builder, By, Key, until, webdriver, ActionChanins } = require('selenium-webdriver');
const sleep = ms => new Promise(res => setTimeout(res, ms));
const fs = require('fs');

async function crwal(data) {
    var driver = new Builder().forBrowser('chrome').build();

    for(let i of data) {
        await driver.get('http://map.naver.com/v5/');
        await sleep(3000);
        for(var j = 0; j < 20; j++) {
            await driver.findElement(By.css('input.input_search')).sendKeys(i.korCor + '역', Key.RETURN);
            await driver.manage().window().setRect({ width: 1024, height: 768 })
            await sleep(2000);
            const iframe = await driver.findElement(By.id('searchIframe'));
            await driver.switchTo().frame(iframe);
            await sleep(3000);
            var name = await driver.findElements(By.css('span.es3Ot'));
            var tag = await driver.findElements(By.css('span.WIDaC'));
            console.log(await name[j].getText());
            console.log(await tag[j].getText());

            var span = await driver.findElements(By.css('span._3hFgU._1Z_6k'));
            var button = await span[j].findElements(By.css('a._1jzhe'));
            const actions = driver.actions({async: true});
            await actions.move({origin: button}).perform();
            await sleep(2000);
            await button.click();




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