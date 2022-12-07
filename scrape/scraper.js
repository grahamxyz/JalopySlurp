const { Builder, By, Key, until } = require('selenium-webdriver');
const { db } = require('pg');
const cheerio = require('cheerio');


(async function scrapeJalopyJungle() {
  let driver = await new Builder().forBrowser('chrome').build();
  const yardsXpath = '//*[@id="yard-id"]';
  try {
    await driver.get('http://inventory.pickapartjalopyjungle.com');
    // zoom to 80%  
    driver.executeScript("document.body.style.zoom='80%'");

    // const yardHtml = await driver.findElement(By.xpath(yardsXpath)).getAttribute("innerHTML");
    // console.debug('scraping yards:');
    // console.debug(yardHtml);

    // // extract the name of each yard
    // let $ = cheerio.load(yardHtml);
    // let yards = [];
    // $("option").each(function () {
    //   if ($(this).attr("value") != "") { yards.push($(this).text()); }
    // });

    // // view each record in each yard
    // await driver.findElement(By.xpath(yardsXpath));

    let yardsParent = await driver.findElement(By.xpath(yardsXpath));
    let yards = await yardsParent.findElements(By.tagName('option'));
    for (let yard of yards) {
      await driver.actions()
        .move({ origin: yardsParent })
        .pause(1000)
        .click()
        .perform();
    }

  } finally {
    driver.close();
  }
})();


// dummy function - will connect to postgres
function addRecord(yard, year, make, model, row) {

}