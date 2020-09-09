var webdriver = require('selenium-webdriver');
const { findChromeDriver } = require('selenium-webdriver/Chrome');

function searchTextOnGoogle() {
    var driver = new webdriver.Builder().forBrowser('chrome').build();

    driver.get('http://map.naver.com/v5/').then(function() {
        driver.findElement(By.css('input.input_search')).sendKeys('webdriver', Key.RETURN);
    }
}