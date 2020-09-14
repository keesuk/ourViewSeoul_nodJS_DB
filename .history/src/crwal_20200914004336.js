const { Builder, By, Key } = require('selenium-webdriver');
const sleep = ms => new Promise(res => setTimeout(res, ms));
const makeImg = require('./makeImg');
const fs = require('fs');
const path = require("path");
                
let obj = {table : []}
obj.table.push({name: 'name', tag: 'tag', data: 'points'});
let json = JSON.stringify(obj)
fs.writeFile('seoulStation.json', json, 'utf8');

async function crwal(data) {
    let driver = new Builder().forBrowser('chrome').build();

    for(let i of data) {
        let stationEng = i.engCor;
        let stationKor = i.korCor;
        let dir = path.dirname(require.main.filename) + '/src/image/' + stationEng;

        await driver.get('http://map.naver.com/v5/');
        await sleep(3000);
        await driver.findElement(By.css('input.input_search')).sendKeys(stationKor + '역', Key.RETURN);
        await driver.manage().window().setRect({ width: 500, height: 773 })
        if (!fs.existsSync(dir)){
            await fs.mkdirSync(dir);
        };

        try {
            for(let j = 0; j < 20; j++) {
                await sleep(2000);
                const iframe = await driver.findElement(By.id('searchIframe'));
                await driver.switchTo().frame(iframe);
                await sleep(3000);
                let name = await driver.findElements(By.css('span.es3Ot'));
                let tag = await driver.findElements(By.css('span.WIDaC'));
                let imgName = await name[j].getText();
                let imgTag = await tag[j].getText();
                let fileName = dir + '/' + imgName + '_' + imgTag + '.png'

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

                await fs.writeFileSync( fileName, encodedString, 'base64');
                await driver.findElement(By.css("body > app > layout > div.map_container.fold.panorama > panorama-layout > div > button")).click()
                await makeImg({fileName, imgName, imgTag});

                fs.readFile('seoulStation.json', 'utf8', function readFileCallback(err, data){
                    if (err){
                        console.log(err);
                    } else {
                        obj = JSON.parse(data);
                        obj.table.push({name: imgName, tag: imgTag, data: points});
                        json = JSON.stringify(obj);
                        fs.writeFile('seoulStation.json', json, 'utf-8', callback);
                    }
                })
            }
        } catch (e) { 
            if (e instanceof RangeError) {return null;}
        }
    }
}


module.exports = crwal;