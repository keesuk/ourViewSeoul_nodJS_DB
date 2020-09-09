var webdriver = require('selenium-webdriver');

async function crwal(csvData) {
    var data = csvData;
    var obj = data[0]
    console.log(obj.korCor)
    var driver = new webdriver.Builder().forBrowser('chrome').build();
    driver.wait(function() {
        return driver.get('http://map.naver.com/v5/').then(function() {driver.findElement(By.css('input.input_search'))})
    }, 2000).then(driver.sendKeys(data.korArr[0], key.RETURN));

    // for(var i = 0; i < data.length; i++) {
    //     driver.sendKeys(data.korArr[0], Key.RETURN);}
        
    //     // for(var j= 0; j < 20; j++){
    //     // sleep(1000)
    //     // var iframe = driver.switchTo().frame(element(by.ID('searchIfrmae')).getWebElement());

    //     // }
    // }
}


module.exports = crwal;