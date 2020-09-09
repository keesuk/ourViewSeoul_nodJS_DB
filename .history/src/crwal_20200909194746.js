var webdriver = require('selenium-webdriver');

async function crwal(csvData) {
    var data = csvData;
    var driver = new webdriver.Builder().forBrowser('chrome').build();
    driver.wait(function() {
        return driver.get('http://map.naver.com/v5/')
    }, timeout);

    for(var i = 0; i < data.length; i++) {
        // ).sendKeys('webdriver', Key.RETURN);.then(function() {driver.findElement(By.css('input.input_search'))});
        
        // for(var j= 0; j < 20; j++){
        // sleep(1000)
        // var iframe = driver.switchTo().frame(element(by.ID('searchIfrmae')).getWebElement());

        // }
        })
    }
}

module.exports = crwal;