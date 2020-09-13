const { webdriver, Builder, By, Key } = require('selenium-webdriver');
const sleep = ms => new Promise(res => setTimeout(res, ms));
const fs = require('fs');

var USERNAME = "bsuser7501964";
var AUTOMATE_KEY = "Hs9zsscQrVxbM8oFkRLa";
var browserstackURL = 'https://' + USERNAME + ':' + AUTOMATE_KEY + '@hub-cloud.browserstack.com/wd/hub';
var capabilities = {
          
    'os' : 'OS X',
    'os_version' : 'Catalina',
    'browserName' : 'Chrome',
    'browser_version' : '80',
    'browserstack.use_w3c' : 'true',
    'name' : "bsuser7501964's First Test"
    
  }

async function crwal(data) {
    let driver = new webdriver.Builder()
        .usingServer(browserstackURL)
        .withCapabilities(capabilities).build();

    for(let i of data) {
        await driver.get('http://map.naver.com/v5/');
        await sleep(3000);
        await driver.findElement(By.css('input.input_search')).sendKeys(i.korCor + '역', Key.RETURN);
        await driver.manage().window().setRect({ width: 500, height: 773 })

        try {
            for(let j = 0; j < 20; j++) {
                await sleep(2000);
                const iframe = await driver.findElement(By.id('searchIframe'));
                await driver.switchTo().frame(iframe);
                await sleep(3000);
                let name = await driver.findElements(By.css('span.es3Ot'));
                let tag = await driver.findElements(By.css('span.WIDaC'));
                console.log(await name[j].getText());
                console.log(await tag[j].getText());

                let span = await driver.findElements(By.css('span._3hFgU._1Z_6k'));
                let button = await span[j].findElement(By.css('a._1jzhe'));
                const actions = driver.actions({async: true});
                await actions.move({origin:button}).perform();
                await sleep(2000);
                await button.click();
                await driver.switchTo().defaultContent();
                
                await sleep(1000);
                let image = await driver.findElement(By.css("#panorama > div > div > div > div:nth-child(1) > canvas"));
                let encodedString = await image.takeScreenshot(true);
                await fs.writeFileSync(`image.png`, encodedString, 'base64');

                await driver.findElement(By.css("body > app > layout > div.map_container.fold.panorama > panorama-layout > div > button")).click()
            }
        } catch (e) { 
            if (e instanceof RangeError) {return null;}
        }
    }
}


module.exports = crwal;