const { Builder, By, Key, until } = require('selenium-webdriver');

//Use selenium to open chrome and select the "TWIN FALLS" yard on JJ website
(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://inventory.pickapartjalopyjungle.com');
    yardField = driver.findElement(By.id('yard-id'));
    await yardField.sendKeys('T');
    await yardField.sendKeys(Key.TAB);
  } finally {
  }
})();