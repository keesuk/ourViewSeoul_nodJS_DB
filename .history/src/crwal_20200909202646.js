var webdriver = require('selenium-webdriver');

async function crwal(csvData) {
    var data = csvData;
    // console.log(data[0].korCor)
    var driver = new webdriver.Builder().forBrowser('chrome').build();
    driver.get('http://map.naver.com/v5/').then(function() {driver.findElement(By.css('input.input_search'))})
    
    await function() {
        await sleep(2000);
        
        for(var i = 0; i < data.length; i++) {
            driver.sendKeys(data[i].korCor, Key.RETURN);}
    }
}


module.exports = crwal;

// var iframe = driver.switchTo().frame(element(by.ID('searchIfrmae')).getWebElement());