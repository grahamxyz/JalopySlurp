const { Builder, By, Key, until } = require('selenium-webdriver');
const { db } = require('pg');
const cheerio = require('cheerio');


(async function scrapeJalopyJungle() {
  var makes, models;
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://inventory.pickapartjalopyjungle.com');
    const yardHtml = await driver.findElement(By.xpath('//*[@id="yard-id"]')).getAttribute("innerHTML");
    console.debug('scraping yards:');
    console.debug(yardHtml);

    // extract the name of each yard
    let $ = cheerio.load(yardHtml);
    let yards = [];
    $("option").each(function () {
      if ($(this).attr("value") != "") { yards.push($(this).text()); }
    });

  } finally {
    driver.close();
  }
})();
