const { Builder, By, Key } = require('selenium-webdriver');
const sleep = ms => new Promise(res => setTimeout(res, ms));
const makeImg = require('./makeImg');
const createJson = require('./createJson');
const uploadfile = require('./uploadFile');
const filter = require('./filter');
const fs = require('fs');
const path = require("path");
const resizeOptimizeImages = require('resize-optimize-images');
                

async function crwal(data) {
    let driver = new Builder().forBrowser('chrome').build();

    for(let i = 0; i < data.length; i++) {
        let stationEng = data[i].engCor;
        let stationKor = data[i].korCor;
        createJson(stationEng);
        let dir = path.dirname(require.main.filename) + '/src/data/image/' + stationEng;

        await driver.get('http://map.naver.com/v5/');
        await sleep(6000);
        await driver.findElement(By.css('input.input_search')).sendKeys(stationKor + '역', Key.RETURN);
        await driver.manage().window().setRect({ width: 1324, height: 1800 });
        if (!fs.existsSync(dir)){
            await fs.mkdirSync(dir);
        };

        try {
            for(let j = 0; j < 20; j++) {
                await sleep(3000);
                const iframe = await driver.findElement(By.id('searchIframe'));
                await driver.switchTo().frame(iframe);
                await sleep(6000);
                let name = await driver.findElements(By.css('span.es3Ot'));
                let tag = await driver.findElements(By.css('span.WIDaC'));
                let imgName = await name[j].getText();
                let imgTag = await tag[j].getText();
                let imgTagID = await filter(imgTag);

                let fileName = await dir + '/' + imgName + '_' + imgTag + '.png'

                let span = await driver.findElements(By.css('span._3hFgU._1Z_6k'));
                let button = await span[j].findElement(By.css('a._1jzhe'));
                const actions = driver.actions({async: true});
                await actions.move({origin:button}).perform();
                await sleep(3000);
                await button.click();
                await driver.switchTo().defaultContent();
                
                await sleep(3000);
                let image = await driver.findElement(By.css("#panorama > div > div > div > div:nth-child(1) > canvas"));
                let encodedString = await image.takeScreenshot(true);

                await fs.writeFileSync( fileName, encodedString, 'base64');
                (async () => {
                    const options = {
                        images: [fileName],
                        width: 500,
                        quality: 100
                    };
                    await resizeOptimizeImages(options);
                })();
                await driver.findElement(By.css("body > app > layout > div.map_container.fold.panorama > panorama-layout > div > button")).click()
                await makeImg({stationKor, stationEng, fileName, imgName, imgTag, imgTagID});
            }
        } catch (e) { 
            if (e instanceof RangeError) {return null;}
        }
        await uploadfile(stationEng);
    }
}


module.exports = crwal;