var webdriver = require('selenium-webdriver');
      
var userName = "bsuser7501964";
var accessKey = "Hs9zsscQrVxbM8oFkRLa"
var browserstackURL = 'https://' +  userName + ':' + accessKey + '@hub-cloud.browserstack.com/wd/hub';

// Input capabilities
var capabilities = {
  
  'os' : 'OS X',
  'os_version' : 'Catalina',
  'browserName' : 'Chrome',
  'browser_version' : '80',
  
  'name' : "bsuser7501964's First Test"

}

var driver = new webdriver.Builder().
  usingServer(browserstackURL).
  withCapabilities(capabilities).
  build();

driver.get('http://www.google.com').then(function(){
  driver.findElement(webdriver.By.name('q')).sendKeys('BrowserStack').then(function(){
    driver.getTitle().then(function(title) {
      console.log(title);
      driver.quit();
    });
  });
});